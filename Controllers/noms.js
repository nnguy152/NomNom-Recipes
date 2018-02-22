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

router.get('/new', (req, res) => {
  res.render('Noms/new')
})

router.get('/:id', (req, res) => {
  Nom.findOne({_id: req.params.id}).then(nomz => {
    res.render('Noms/show', nomz)
  })
})

router.post('/', (req, res) => {
  Nom.create({
    name: req.body.name,
    description: req.body.description,
    instructions: req.body.instructions,
    ingredients: req.body.ingredients
  }).then(() => {
    res.redirect('/Noms')
  }).catch(err => res.send('FILL IN ALL FIELDS. Error Message:' + err))
})

router.put('/:id', (req, res) => {
  Nom.findOneAndUpdate({_id: req.params.id}, req.body).then(nomz => {
    res.redirect('/Noms')
  })
})

router.delete('/:id', (req, res) => {
  Nom.findOneAndRemove({_id: req.params.id}).then(() => {
    res.redirect('/Noms')
  })
})

module.exports = router
