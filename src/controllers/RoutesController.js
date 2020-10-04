class RoutesController {
  index(req, res) {
    const urlForm = process.env.NODE_ENV === 'development' ? `http://localhost:${process.env.PORT}/api/username` : 'http://localhost/api/username';

    res.render('index', {
      title: 'GitHub Follow/Followers tracker',
      message: 'GitHub Follow/Followers tracker',
      urlForm,
    });
  }

  status(req, res) {
    res.json({ status: 'Server is running!' });
  }

  apiUsername(req, res) {
    if (!req.body.username) { res.status(400).send(); }

    res.json(req.body);
  }
}

module.exports = RoutesController;
