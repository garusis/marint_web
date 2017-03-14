"use strict"

const express = require("express")
const path = require("path")
const compression = require("compression")
const favicon = require("serve-favicon")
const prerender = require("prerender-node")
const sitemap = require("express-sitemap");

let app = express()

let dirEnv = "development", appPort = process.env.PORT || 8887

if (process.env.NODE_ENV === "staging" || process.env.NODE_ENV === "production") {
  dirEnv = "production"
}

app.use(prerender.set("prerenderToken", process.env.PRERENDER_TOKEN));
app.use(compression())
app.use(favicon(path.join(__dirname, dirEnv, "assets", "images", "favicon.ico")))
app.use(/.*\.map$/i, function (req, res) {
  res.sendStatus(404)
})

app.use("/fonts", express.static(path.join(__dirname, "development", "assets", "fonts")))
app.use("/", express.static(path.join(__dirname, dirEnv)))

app.get("/sitemap.xml", function (req, res) {
  let hostUrl = process.env.HOST_URL || `http://localhost:${appPort}`
  hostUrl = hostUrl.split("://")

  let protocol = hostUrl[0], url = hostUrl[1].split(":")

  sitemap({
    http: protocol,
    url: url[0],
    port: url[1],
    map: {
      "/foo": ["get"],
      "/foo2": ["get"]
    },
    route: {
      "/foo": {
        lastmod: "2014-06-20",
        changefreq: "always",
        priority: 1.0,
      }
    },
  }).XMLtoWeb(res)
})

app.all("/*", function (req, res, next) {
  res.sendFile(path.join(dirEnv, "index.html"), {root: __dirname})
})

app.listen(appPort, function () {
  console.log(`MI Front is runing at  ${appPort}`)
});