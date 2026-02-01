module.exports = function handler(req, res) {
  try {
    var clientId = process.env.OAUTH_GITHUB_CLIENT_ID;
    var scope = 'repo,user';
    var authURL = 'https://github.com/login/oauth/authorize?client_id=' + clientId + '&scope=' + scope;
    res.setHeader('Location', authURL);
    res.statusCode = 302;
    res.end();
  } catch (e) {
    res.statusCode = 500;
    res.end(JSON.stringify({ error: e.message, stack: e.stack }));
  }
};
