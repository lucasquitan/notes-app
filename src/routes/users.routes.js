const { Router } = require('express');

const UserController = require('../controllers/UserController');

const routes = Router();

routes.get('/users/singup', UserController.renderSignUpForm);
routes.post('/users/singup', UserController.singup);

routes.get('/users/singin', UserController.renderSingInForm);
routes.post('/users/singin', UserController.singin);

routes.get('/users/logout', UserController.logout);

module.exports = routes;
