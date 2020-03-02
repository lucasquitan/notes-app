const helpers = {};

helpers.isAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  req.flash('error', 'You are not authorizated. Please, sign in');
  return res.redirect('/users/signin');
};

module.exports = helpers;
