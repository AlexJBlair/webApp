const express = require('express')
const bodyParser = require('body-parser')
const nodemon = require('nodemon')
const favicon = require('express-favicon')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})
app.get('/styles.css', function(req, res){
  res.sendFile(__dirname + '/styles.css')
})
app.get('/', function(req, res){
  res.sendFile(__dirname + '/coffee.ico')
})
app.get('/index.js', function(req, res){
  res.sendFile(__dirname + '/index.js')
})

app.use(favicon(__dirname + '/coffee.ico'));

app.listen(port, () => {
  console.log('App started')
  console.log(`Example app listening on port ${port}`)
})