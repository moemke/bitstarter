var express = require('express');
var fs = require('fs');
var infile = "index.html";

var app = express.createServer(express.logger());
var buf = new Buffer(fs.readFileSync(infile));

app.get('/', function(request, response) {
    response.send(buf.toString());
    //response.send('Hello World2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
