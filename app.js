"use strict"

const express = require("express")
const path = require("path")
const compression = require("compression")
const favicon = require("serve-favicon")
const prerender = require("prerender-node")
const sitemap = require("express-sitemap")
const request = require('request-promise')
const moment = require("moment")

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
app.use("/font", express.static(path.join(__dirname, "development", "assets", "fonts")))
app.use("/", express.static(path.join(__dirname, dirEnv)))

app.get("/sitemap.xml", function (req, res) {
  let hostUrl = process.env.HOST_URL || `http://localhost:${appPort}`
  hostUrl = hostUrl.split("://")

  let protocol = hostUrl[0], url = hostUrl[1].split(":")
  let filter = {"fields": ["title", "updatedAt", "id"]}
  filter = encodeURIComponent(JSON.stringify(filter))

  let maps = {
    http: protocol,
    url: url[0],
    port: url[1],
    map: {
      "/": ["get"],
      "/cursos": ["get"],
      "/noticias": ["get"],
      "/contacto": ["get"],
      "/instructores": ["get"]
    },
    route: {
      "/": {
        lastmod: "2017-03-01",
        changefreq: "daily",
        priority: 1.0,
      },
      "/cursos": {
        lastmod: "2017-03-01",
        changefreq: "daily",
        priority: 1.0,
      },
      "/noticias": {
        lastmod: "2017-03-01",
        changefreq: "daily",
        priority: 1.0,
      },
      "/contacto": {
        lastmod: "2017-03-01",
        changefreq: "monthly",
        priority: 1.0
      },
      "/instructores": {
        lastmod: "2017-03-01",
        changefreq: "monthly",
        priority: 1.0,
      }
    }
  }

  request(`${process.env.BACKEND_URL}/api/publications?filter=${filter}`, {json: true})
    .then(function (publications) {

      publications.forEach(function (publication) {
        let route = `/noticias/${encodeURIComponent(publication.title)}-${publication.id}`

        maps.map[route] = ["get"]
        maps.route[route] = {
          lastmod: moment(publication.updatedAt).format("YYYY-MM-DD"),
          changefreq: "yearly",
          priority: 0.5,
        }
      })

      sitemap(maps).XMLtoWeb(res)
    })
})

app.all("/*", function (req, res, next) {
  res.sendFile(path.join(dirEnv, "index.html"), {root: __dirname})
})

app.listen(appPort, function () {
  console.log(`MI Front is runing at  ${appPort}`)
});