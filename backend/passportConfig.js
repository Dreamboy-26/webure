const passport = require('passport')
const User = require('./userSchema.js')
const LocalStrategy = require('passport-local')
const jwt=require("jsonwebtoken")
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


//json web token

const token=jwt.sign({_id:this._id},"SECRET")
console.log(token)




        return done(null, user)
      } catch (error) {
        return done(error, false)
      }
    }),
  )

  passport.serializeUser(async (user, done) => {
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



exports.isAuthenticated=(req,res,next)=>{
    if(req.user)
    {
        return next()
    }

    res.redirect("/login")
}