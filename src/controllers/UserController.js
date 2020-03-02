const passport = require('passport');

const User = require('../models/User');

const UserController = {};

UserController.renderSignUpForm = (req, res) => {
  res.render('users/signup');
};

UserController.signup = async (req, res) => {
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
    res.render('users/signup', { errors, name, email });
  } else {
    const userExists = await User.findOne({ email });

    if (userExists) {
      req.flash('error', 'The e-mail is already in use.');
      res.redirect('/users/signup');
    } else {
      const user = new User({ name, email, password });

      user.password = await user.hashPassword(password);
      await user.save();

      req.flash('sucess', 'Account created successfully');
      res.redirect('/users/signin');
    }
  }
};

UserController.renderSignInForm = (req, res) => {
  res.render('users/signin');
};

UserController.signin = passport.authenticate('local', {
  failureRedirect: '/users/signin',
  successRedirect: '/notes',
  failureFlash: true,
});

UserController.logout = (req, res) => {
  req.logout();
  req.flash('sucess', 'You are disconnected successfully');
  res.redirect('/users/signin');
};

module.exports = UserController;
