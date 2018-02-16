// server.js
var express = require('express');
var app = express();

// Our first route
app.get('/', function (req, res) {
  res.send('Hello SweetCode!');
});

// Our second route
app.get('/sweet', function (req, res) {
  res.send('Sweet!');
});

// Listen to port 5000
app.listen(5000, function () {
  console.log('SweetCode app listening on port 5000!');
});