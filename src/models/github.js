const Request = require('../utils/request');

class GitHub {
  async getFollowers(username) {
    return Request.get(`https://api.github.com/users/${username}/followers`);
  }

  async getFollowing(username) {
    return Request.get(`https://api.github.com/users/${username}/following`);
  }
}

module.exports = GitHub;
