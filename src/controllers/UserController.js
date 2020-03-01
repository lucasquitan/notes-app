const User = require('../models/User');

const UserController = {};

UserController.renderSignUpForm = (req, res) => {
  res.render('users/singup');
};

UserController.singup = async (req, res) => {
  const errors = [];

  const { name, email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    errors.push({
      text: 'Password does not match.',
    });
  }

  if (password.length < 4) {
    errors.push({
      text: 'Password must have at least 4 characteres.',
    });
  }

  if (errors.length > 0) {
    res.render('users/singup', { errors, name, email });
  } else {
    const userExists = await User.findOne({ email });

    if (userExists) {
      req.flash('error', 'The e-mail is already in use.');
      res.redirect('/users/singup');
    } else {
      const user = new User({ name, email, password });

      user.password = await user.hashPassword(password);
      await user.save();

      req.flash('sucess', 'Account created successfully');
      res.redirect('/users/singin');
    }
  }
};

UserController.renderSingInForm = (req, res) => {
  res.render('users/singin');
};

UserController.singin = (req, res) => {
  res.send('singin');
};

UserController.logout = (req, res) => {
  res.send('logout');
};

module.exports = UserController;
