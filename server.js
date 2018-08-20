var http = require('http');//to require a http module
var app = require('./app');//to include app file

http.createServer(app.handleRequest).listen(8080);//to create a server and add function of app that name is handlerequest
