"use strict"
const express = require('express');
let app = express();

app.use('/', express.static(__dirname + '/development/'));
app.all('/*', function(req, res, next) {
    res.sendFile('/development/index.html', { root: __dirname });
});

let appPort = process.env.PORT || 8887
app.listen(appPort, function () {
    console.log(`MI Front is runing at  ${appPort}`)
});