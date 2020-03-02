const { Router } = require('express');

const UserController = require('../controllers/UserController');

const routes = Router();

routes.get('/users/signup', UserController.renderSignUpForm);
routes.post('/users/signup', UserController.signup);

routes.get('/users/signin', UserController.renderSignInForm);
routes.post('/users/signin', UserController.signin);

routes.get('/users/logout', UserController.logout);

module.exports = routes;
