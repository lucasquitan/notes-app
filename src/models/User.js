const { Schema, Model } = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

UserSchema.methods.hashPassword = async password => {
  const salt = await bcrypt.genSalt(10);
  const result = await bcrypt.hash(password, salt);
  return result;
};

UserSchema.methods.matchPassword = password => {
  return bcrypt.compare(password, this.password);
};

module.exports = Model(`User`, UserSchema);
