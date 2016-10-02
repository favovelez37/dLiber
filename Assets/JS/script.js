var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use('/', express.static(__dirname + 'index.html'));

app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});
