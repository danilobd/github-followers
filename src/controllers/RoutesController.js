class RoutesController {
  status(req, res) {
    res.json({ status: 'Server is running!' });
  }
}

module.exports = RoutesController;
