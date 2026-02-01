module.exports = function handler(req, res) {
  var clientId = process.env.OAUTH_GITHUB_CLIENT_ID.trim();
  var scope = 'repo,user';
  var authURL = 'https://github.com/login/oauth/authorize?client_id=' + clientId + '&scope=' + scope;
  res.setHeader('Location', authURL);
  res.statusCode = 302;
  res.end();
};
