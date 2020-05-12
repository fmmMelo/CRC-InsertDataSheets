const express = require('express');

const DataController = require('./controllers/DataController')

const routes = express.Router();

routes.get('/insert', DataController.index);
routes.post('/insert', DataController.create);

module.exports = routes;