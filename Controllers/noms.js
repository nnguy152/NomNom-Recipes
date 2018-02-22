const express = require('express')
const router = express.Router()
const Nom = require('../Models/Nom')

router.get('/', (req, res) => {
  Nom.find({}).then(nomz => {
    res.render('Noms/index', {nomz})
  })
})

module.exports = router
