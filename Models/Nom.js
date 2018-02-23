const mongoose = require('../DB/connection')

const NomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  instructions: {
    type: String,
    required: true
  },
  ingredients: {
    type: String,
    required: true
  }
})

const Nom = mongoose.model('Nom', NomSchema)

module.exports = Nom
