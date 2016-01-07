var recognize = require('../lib/recognize'),
    graph = require('fbgraph');

/*!
 * Calls the recognize function
 */

module.exports = function(req, res) {

  // vars
  var imgUrl = req.body.url,
      accessToken = req.body.accessToken;

  // set access_token to upload image
  graph.setAccessToken(accessToken);

  // upload image
  var params = {
    url: imgUrl, 
    message:'temp', 
    privacy: { value: 'SELF' } // we don't want other people to see it
  };

  graph.post('/me/photos', params, function(err, r) {
    
    // we have the imgId! now we can ask Facebook to recognize my friends
    var imgId = r.id;

    // wait 3 seconds before asking Facebook (they recognize asynchronously)
    setTimeout(function() {
      recognize(imgId, function(result) {
        res.send(result);
      })
    }, 3000)
  });
};