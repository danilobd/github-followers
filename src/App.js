const express = require('express');

class App {
  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: true }));
  }

  routes() {
    this.express.get('/', (req, res) => res.json({ status: 'Server is running!' }));
  }
}

module.exports = new App().express;
