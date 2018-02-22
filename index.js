const express = require('express')
const hbs = require('hbs')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')

const app = express()
app.set('view engine', 'hbs')
app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.render('index')
})




app.listen(4000, () => {
  console.log('It work brah')
})
