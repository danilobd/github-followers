class RoutesController {
  index(req, res) {
    res.render('index', { title: 'teste', message: 'Hello Word' });
  }

  status(req, res) {
    res.json({ status: 'Server is running!' });
  }
}

module.exports = RoutesController;
