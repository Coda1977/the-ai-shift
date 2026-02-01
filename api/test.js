module.exports = function handler(req, res) {
  res.status(200).json({
    ok: true,
    hasClientId: !!process.env.OAUTH_GITHUB_CLIENT_ID,
    hasClientSecret: !!process.env.OAUTH_GITHUB_CLIENT_SECRET,
    nodeVersion: process.version
  });
};
