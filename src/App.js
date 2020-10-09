const express = require('express');
const cors = require('cors');
const RoutesController = require('./controllers/RoutesController');
const GitHub = require('./models/github');

class App {
  constructor() {
    this.express = express();
    this.routesController = new RoutesController(new GitHub());

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: true }));

    this.express.use(cors());
  }

  routes() {
    this.express.get('/status', (req, res) => this.routesController.status(req, res));
    this.express.get('/api/username/:username', (req, res) => this.routesController.apiUsername(req, res));
  }
}

module.exports = new App().express;
