const express = require('express')
const routes = express.Router()
const mongoose = require('mongoose')
const User = require('./userSchema.js')
const passport = require('passport')
const { initializingPassport, isAuthenticated } = require('./passportConfig.js')
const jwt = require('jsonwebtoken')
initializingPassport(passport)
routes.get('/', (req, res) => {
  res.send('Hi from routes')
})

routes.post('/signup', async (req, res) => {
  const user = await User.findOne({ username: req.body.username })

  if (user) {
    return res.status(400).send('User exist')
  } else {
    const newuser = await User.create(req.body)
    return res.status(201).send(newuser)
  }
})

routes.post(
  '/login',
  passport.authenticate('local', { failureMessage: 'something is wrong' }),
  (req, res) => {
    const token = jwt.sign({ _id: this._id }, 'SECRET')

    res.cookie('jwtoken', token, {
      expires: new Date(Date.now() + 2589200000),
      httpOnly: true,
    })

    res.send(req.user)
  },
)

routes.get('/dashboard/:id', async (req, res) => {
  const id = req.params.id
  const regUser = await User.findById(id)
  res.send(regUser)
})

routes.get('logout', (req, res) => {
  req.logout()
  res.redirect('/login')
})

module.exports = routes
