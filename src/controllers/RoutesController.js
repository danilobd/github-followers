class RoutesController {
  constructor(github) {
    this.github = github;
  }

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

  async apiUsername(req, res) {
    if (!req.body.username) { res.status(400).send(); }

    const { username } = req.body;

    const getFollowers = await this.github.getFollowers(username);
    const getFollowing = await this.github.getFollowing(username);

    if (getFollowers && getFollowing) {
      res.json({
        followers: getFollowers,
        following: getFollowing,
      }).send();
    }

    res.status(404).send();
  }
}

module.exports = RoutesController;
