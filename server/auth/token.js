const jwt = require('jsonwebtoken')

const db = require('../db/users')

function issue(req, res, next) {
  db.getUserByName(req.body.username)
    .then(user => {
      const token = createToken(user, process.env.JWT_SECRET)
      res.json({
        message: 'Authorization successful',
        token
      })
    })
}

function createToken(user, secret, options) {
  return jwt.sign({
    id: user.id,
    username: user.username
  }, secret, {
    expiresIn: '1d'
  })
}

module.exports = {
  issue
}
