const express = require('express')
const routes = express.Router()
const mongoose = require('mongoose')
const User = require('./userSchema.js')
const passport = require('passport')
const { initializingPassport, isAuthenticated } = require('./passportConfig.js')
const jwt = require('jsonwebtoken')
initializingPassport(passport)
// routes.get('/', (req, res) => {
//   res.send('Hi from routes')
// })

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
    if (req.user) {
      let token = jwt.sign({ _id: req.user._id }, 'SECRET')
      res.cookie('jwtoken', token, {
        expires: new Date(Date.now() + 2589200000),
        httpOnly: true,
      })
    }

    res.send(req.user)
  },
)

routes.get('/dashboard/:id', isAuthenticated, async (req, res) => {
  const id = req.params.id
  const regUser = await User.findById(id)
  res.send(regUser)
  // if (!req.rootUser) {
  //   res.redirect('/login')
  // }
  // console.log(regUser)
})

routes.get('/logout', (req, res) => {
 
  if (req.cookies) {
    res
    .clearCookie('jwtoken')
    .status(200)
    .send({
        message: 'You have logged out'
    })
} 
  
})

module.exports = routes
