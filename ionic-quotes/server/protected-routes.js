var express = require('express'),
    jwt     = require('express-jwt'),
    config  = require('./config'),
    quoter  = require('./quoter');

var app = module.exports = express.Router();

var jwtCheck = jwt({
  secret: new Buffer('aVB4QS7C-mZpEk41FF96bA8lWV5FiXzCxJM2rsOeqvX6D5R7WKT0YdxuTvg3iCf2', 'base64'),
  audience: 'lKON6UJJV5zP6KePediJ1rQlRQUFHKLV'
});

app.use('/api/protected', jwtCheck);

app.get('/api/protected/random-quote', function(req, res) {
  res.status(200).send(quoter.getRandomOne());
});
