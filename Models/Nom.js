const mongoose = require('../DB/connection')

const NomSchema = new mongoose.Schema({
  name: String,
  description: String,
  instructions: String,
  ingredients: String
})

const Nom = mongoose.model('Nom', NomSchema)

module.exports = Nom
