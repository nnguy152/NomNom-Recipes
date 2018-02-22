const express = require('express')
const router = express.Router()
const Nom = require('../Models/Nom')

router.get('/', (req, res) => {
  Nom.find({}).then(nomz => {
    res.render('Noms/index', {nomz})
  })
})


router.get('/edit/:id', (req, res) => {
  Nom.findOne({_id: req.params.id}).then(nomz => {
    res.render('Noms/edit', nomz)
  })
})

router.get('/:id', (req, res) => {
  Nom.findOne({_id: req.params.id}).then(nomz => {
    res.render('Noms/show', nomz)
  })
})



module.exports = router
