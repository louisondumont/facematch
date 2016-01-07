/*!
 * dependencies
 */

var config = require('../config'),
    request = require('request');

/*!
 * Recognize function (where the magic happens)
 * calls Facebook w/ imgId, simulating a loggedin user w/ browser
 */

module.exports = function(imgId, callback) {
  request.post({
    url:'https://www.facebook.com/photos/tagging/recognition/?__pc=EXP1%3ADEFAULT',
    headers: {
       'x_fb_background_state': 1,
       'origin': 'https://www.facebook.com',
       'accept-encoding': 'gzip, deflate, lzma',
       'accept-language': 'en-US,en;q=0.8',
       'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.106 Safari/537.36',
       'content-type': 'application/x-www-form-urlencoded',
       'accept': '*/*',
       'referer': 'https://www.facebook.com/',
       'cookie': config.cookies
    },
    body: 'recognition_project=composer_facerec&photos[0]=' + imgId + '&target&is_page=false&include_unrecognized_faceboxes=false&include_face_crop_src=false&include_recognized_user_profile_picture=false&include_low_confidence_recognitions=false&' + config.req_params,
    gzip: true
  }, function cb(err, httpResponse, body) {
      
      // YAY!
      var json = JSON.parse(body.replace('for (;;);', ''));
      callback(json.payload[0].faceboxes);
  });
}   