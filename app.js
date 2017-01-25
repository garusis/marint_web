var express = require('express');
var app = express();

app.use('/assets', express.static(__dirname + '/development/assets'));
app.all('/*', function(req, res, next) {
    res.sendFile('/development/index.html', { root: __dirname });
});

app.listen(3006); //the port you want to use