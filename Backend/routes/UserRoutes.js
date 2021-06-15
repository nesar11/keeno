const express = require('express')
const user = require('../controllers/UserControllers')
const router = express.Router()

router.post('/register', user.register)

router.post('/login', user.login)

router.get('/profile', user.authMiddleware, function (req, res) {
    res.json({ 'access': true })
  })
module.exports = router