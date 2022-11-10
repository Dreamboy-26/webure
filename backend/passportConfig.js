const passport = require('passport')
const User = require('./userSchema.js')
const LocalStrategy = require('passport-local').Strategy
const jwt = require('jsonwebtoken')
exports.initializingPassport = (passport) => {
  passport.use(
    new LocalStrategy(async (username, password, done) => {
      try {
        const user = await User.findOne({ username })

        if (!user) {
          return done(null, false)
        }

        if (user.password != password) {
          return done(null, false)
        }

        return done(null, user)
      } catch (error) {
        return done(error, false)
      }
    }),
  )

  passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id)
      done(null, user)
    } catch (e) {
      done(e, false)
    }
  })
}

exports.isAuthenticated = async (req, res, next) => {
  if (req.cookies) {
    const token = req.cookies.jwtoken
    // const verifyToken = jwt.verify(token, 'SECRET')
    // var userId = verifyToken._id
    // const rootUser = await User.findOne({ _id: userId })
   

    return next()
  } else {
    res.send('error')
  }

  // const token = req.cookies.jwtoken
  // const verifyToken = jwt.verify(token, 'SECRET')
  // var userId = verifyToken._id
  // const rootUser = await User.findOne({ _id: userId })

  // if (rootUser) {
  //   req.token = token
  //   req.rootUser = rootUser
  //   req.userId = rootUser._id
  //   return next()
  // } else {
  //   console.log('error')
  // }
}
