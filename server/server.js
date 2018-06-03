const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const authRoutes = require('./routes/auth')

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api/auth', authRoutes)

app.get('/msg', (req, res) => {
  res.json({ "greeting": "Hello World!" })
})

module.exports = app
