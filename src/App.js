const express = require('express');
const RoutesController = require('./controllers/RoutesController');

class App {
  constructor() {
    this.express = express();
    this.routesController = new RoutesController();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: true }));
  }

  routes() {
    this.express.get('/', (req, res) => this.routesController.status(req, res));
  }
}

module.exports = new App().express;
