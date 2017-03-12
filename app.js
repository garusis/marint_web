"use strict"

const express = require("express")
const path = require("path")
const compression= require("compression")
const favicon = require('serve-favicon')
let app = express()

let dirEnv = process.env.NODE_ENV || "development"


app.use(compression())
app.use(favicon(path.join(__dirname, dirEnv, "assets","images","favicon.ico")))
app.use(/.*\.map$/i, function (req, res) {
  res.sendStatus(404)
})
app.use("/", express.static(path.join(__dirname, dirEnv)))
app.all("/*", function (req, res, next) {
  res.sendFile(path.join(dirEnv, "index.html"), {root: __dirname})
})

let appPort = process.env.PORT || 8887
app.listen(appPort, function () {
  console.log(`MI Front is runing at  ${appPort}`)
});