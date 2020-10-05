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
      const checkUsers = this.github.checkUsers(getFollowing, getFollowers);
      const iDontFollowBack = this.github.iDontFollowBack(getFollowing, getFollowers);

      res.json({
        followBack: checkUsers.followBack,
        dontFollowBack: checkUsers.dontFollowBack,
        iDontFollowBack,
      }).send();
    }

    res.status(404).send();
  }
}

module.exports = RoutesController;
