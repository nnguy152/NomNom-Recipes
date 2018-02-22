const express = require('express')
const router = express.Router()
const Nom = require('../Models/Nom')

router.get('/', (req, res) => {
  Nom.find({}).then(nom => {
    res.render('Noms/index', {nom})
  })
})



module.exports = router
