const Request = require('../utils/request');

class GitHub {
  async getFollowers(username) {
    return Request.get(`https://api.github.com/users/${username}/followers`);
  }

  async getFollowing(username) {
    return Request.get(`https://api.github.com/users/${username}/following`);
  }

  checkUsers(followgin, followers) {
    const dontFollowBack = { title: "Don't follow you back", users: [] };
    const followBack = { title: 'Follow you back', users: [] };

    const compare = (user) => followers.find((element) => element.id === user.id);

    followgin.forEach((user) => {
      const response = compare(user);

      if (response === undefined) {
        dontFollowBack.users.push(user);
      } else { followBack.users.push(response); }
    });

    return { followBack, dontFollowBack };
  }

  youDontFollowBack(followgin, followers) {
    const youDontFollowBack = { title: "You don't follow back", users: [] };

    const compare = (user) => followgin.find((element) => element.id === user.id);

    followers.forEach((user) => {
      const response = compare(user);

      if (response === undefined) { youDontFollowBack.users.push(user); }
    });

    return youDontFollowBack;
  }
}

module.exports = GitHub;
