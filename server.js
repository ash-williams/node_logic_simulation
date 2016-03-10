process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var port = process.env.PORT;
var ip = process.env.IP;

var express = require('./config/express');

var app = express();


app.listen(port);

module.exports = app;

console.log('Server running on IP: ' + ip + ' and port: ' + port);