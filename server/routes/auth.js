const express = require('express')

const router = express.Router()

router.post('/register', register)

function register (req, res) {
  const {username, password} = req.body
}

module.exports = router
