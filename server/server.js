const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/msg', (req, res) => {
  res.json({ "greeting": "Hello World!" })
})

module.exports = app
