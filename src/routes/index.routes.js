const { Router } = require('express');

const IndexController = require('../controllers/IndexController');

const routes = Router();

routes.get('/', IndexController.renderIndex);
routes.get('/about', IndexController.renderAbout);

module.exports = routes;
