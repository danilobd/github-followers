const fetch = require('node-fetch');

class Request {
  get(url) {
    return fetch(url)
      .then((res) => res.json())
      .then((json) => json);
  }

  post(url, content) {
    return fetch(url, {
      method: 'post',
      body: JSON.stringify(content),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((json) => json);
  }
}

module.exports = new Request();
