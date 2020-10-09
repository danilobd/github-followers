class RoutesController {
  constructor(github) {
    this.github = github;
  }

  status(req, res) {
    res.json({ status: 'Server is running!' });
  }

  async apiUsername(req, res) {
    if (!req.params.username) { res.status(400).send(); }

    const { username } = req.params;

    try {
      const getFollowers = await this.github.getFollowers(username);
      const getFollowing = await this.github.getFollowing(username);

      if (getFollowers && getFollowing) {
        const checkUsers = this.github.checkUsers(getFollowing, getFollowers);
        const iDontFollowBack = this.github.iDontFollowBack(getFollowing, getFollowers);

        return res.json({
          followBack: checkUsers.followBack,
          dontFollowBack: checkUsers.dontFollowBack,
          iDontFollowBack,
        }).send();
      }
      return res.status(404).send();
    } catch (error) {
      return res.status(500);
    }
  }
}

module.exports = RoutesController;
