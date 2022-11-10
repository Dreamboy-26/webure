const express = require('express')
const {mongoose}  = require('mongoose')
const app = express()
const routes = require('./routes.js')
const passport=require("passport")
const expressSession=require("express-session")
const cors=require("cors")
app.use(cors())
app.use(expressSession({secret:"secret",resave:false, saveUninitializes:false}))
app.use(express.json())
app.use(passport.initialize())
app.use(passport.session())

mongoose
  .connect('mongodb://localhost:27017/webure')
  .then((e) => {
    console.log('connected')
  })
  .catch((e) => {
    console.log('error')
  })

app.get('/', routes)
app.post('/signup', routes)
app.post('/login', routes)
app.get('/dashboard/:id', routes)
app.get('/logout', routes)





const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log('Server connected to', PORT)
})
