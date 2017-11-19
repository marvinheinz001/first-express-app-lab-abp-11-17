var express = require('express')
var app = express()

app.get('/', function(req, resp){
  resp.send("Hello, world!")
})

module.exports = app
