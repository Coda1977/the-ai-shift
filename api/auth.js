export default function handler(req, res) {
  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;
  const scope = 'repo,user';
  const authURL = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=${scope}`;
  res.redirect(301, authURL);
}
