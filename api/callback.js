module.exports = async function handler(req, res) {
  var code = req.query.code;

  if (!code) {
    return res.status(400).send('Missing code parameter');
  }

  var response = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      client_id: process.env.OAUTH_GITHUB_CLIENT_ID,
      client_secret: process.env.OAUTH_GITHUB_CLIENT_SECRET,
      code: code,
    }),
  });

  var data = await response.json();
  var token = data.access_token;

  if (!token) {
    return res.status(401).send('Failed to get access token from GitHub: ' + JSON.stringify(data));
  }

  var content = '<!DOCTYPE html><html><body><script>' +
    '(function() {' +
    '  function recieveMessage(e) {' +
    '    console.log("recieveMessage", e);' +
    '    window.opener.postMessage(' +
    '      "authorization:github:success:" + JSON.stringify({token: "' + token + '", provider: "github"}),' +
    '      e.origin' +
    '    );' +
    '    window.removeEventListener("message", recieveMessage, false);' +
    '  }' +
    '  window.addEventListener("message", recieveMessage, false);' +
    '  window.opener.postMessage("authorizing:github", "*");' +
    '})();' +
    '</script></body></html>';

  res.status(200).send(content);
};
