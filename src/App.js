const express = require('express');
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

    this.express.set('view engine', 'pug');
    this.express.set('views', `${__dirname}/views`);
  }

  routes() {
    this.express.get('/status', (req, res) => this.routesController.status(req, res));
    this.express.get('/', (req, res) => this.routesController.index(req, res));
    this.express.post('/api/username', (req, res) => this.routesController.apiUsername(req, res));
  }
}

module.exports = new App().express;
