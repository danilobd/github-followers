const Request = require('../utils/request');

class GitHub {
  async getFollowers(username) {
    return Request.get(`https://api.github.com/users/${username}/followers`);
  }

  async getFollowing(username) {
    return Request.get(`https://api.github.com/users/${username}/following`);
  }

  checkUsers(followgin, followers) {
    const dontFollowBack = [];
    const followBack = [];

    const compare = (user) => followers.find((element) => element.id === user.id);

    followgin.forEach((user) => {
      const response = compare(user);

      if (response === undefined) { dontFollowBack.push(user); } else followBack.push(response);
    });

    return { followBack, dontFollowBack };
  }

  iDontFollowBack(followgin, followers) {
    const dontFollowBack = [];

    const compare = (user) => followgin.find((element) => element.id === user.id);

    followers.forEach((user) => {
      const response = compare(user);

      if (response === undefined) { dontFollowBack.push(user); }
    });

    return dontFollowBack;
  }
}

module.exports = GitHub;
