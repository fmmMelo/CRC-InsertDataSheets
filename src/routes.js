const express = require('express');

const DataController = require('./controllers/DataController')

const routes = express.Router();

routes.post('/insert', DataController.index);

module.exports = routes;