const express = require('express')
const hbs = require('hbs')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
const nomsController = require('./Controllers/noms')

const app = express()
app.set('view engine', 'hbs')
app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.render('index')
})

app.use('/noms', nomsController)

app.listen(4000, () => {
  console.log('It work brah')
})
