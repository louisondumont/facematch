var config = require('../config'),
    graph = require('fbgraph');

/*!
 * getAccessToken
 * get the access token needed to upload images
 */

module.exports = function(req, res) {

  // we don't have a code yet, go to auth
  if (!req.query.code) {
    var authUrl = graph.getOauthUrl({
      client_id: config.client_id,
      redirect_uri: 'http://localhost:' + config.port + '/getAccessToken',
      scope: config.scope
    });

    if (!req.query.error) res.redirect(authUrl);
    else res.send('access denied');
    return ;
  }

  // code is set, let's get that access token
  graph.authorize({
    client_id:      config.client_id,
    redirect_uri:   'http://localhost:' + config.port + '/getAccessToken',
    client_secret:  config.client_secret,
    code:           req.query.code
  }, function (err, facebookRes) {
    res.send(facebookRes);
  });
}