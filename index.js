/*!
 * dependencies
 */

var express = require('express'),
    bodyParser = require('body-parser'),
    routes = require('./routes'),
    config = require('./config');

/*!
 * init
 */

var app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/*! 
 * routes
 */

app.get('/getAccessToken', routes.getAccessToken);
app.post('/recognize', routes.recognize)

/*!
 * let's go!
 */

app.listen(config.port, function() {
  console.log('Express server listening on port %d', config.port);
});