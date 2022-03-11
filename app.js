const express = require('express')
const bodyParser = require('body-parser')
const nodemon = require('nodemon')
const favicon = require('express-favicon')

const app = express()
const port = 3000

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})
app.get('/styles.css', (req, res) =>{
  res.sendFile(__dirname + '/styles.css');
})
app.get('index.js', (req, res) =>{
  res.sendFile(__dirname + '/index.js');
})
app.post('/', function(req, res) {
  var btnResponse = req.body.btnResponse
});

app.listen(port, () => {
  console.log('App started')
  console.log(`Example app listening on port ${port}`)
})