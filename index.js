const express = require('express')
const hbs = require('hbs')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
const passport = require('passport')
const session = require('express-session')
const flash = require('connect-flash')
const cookieParser = require('cookie-parser')
const nomsController = require('./Controllers/noms')
const app = express()

app.use(cookieParser())

app.set('view engine', 'hbs')
app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({ extended: true }))

app.use(flash())
app.use(session({ secret: 'BLAH' }))

require('./Config/passport')(passport)
app.use(passport.initialize())
app.use(passport.session())

app.use(function (req, res, next) {
  res.locals.currentUser = req.user
  next()
})

app.get('/', (req, res) => {
  res.render('index')
})

app.use('/noms', nomsController)

// app.use('/users', usersController)

app.listen(4000, () => {
  console.log('It work brah')
})
