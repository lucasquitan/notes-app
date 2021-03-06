const mongoose = require('mongoose');

const { DB_HOST, DB_DATABASE } = process.env;
const DB_URL = `mongodb://${DB_HOST}/${DB_DATABASE}`;

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log('Database is connected'))
  .catch(err => console.log(err));
