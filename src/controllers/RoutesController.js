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
}

module.exports = RoutesController;
