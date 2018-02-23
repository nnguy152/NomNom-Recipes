const mongoose = require('../DB/connection')
const bcrypt = require('bcrypt-nodejs')

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

var UserSchema = new mongoose.Schema({
  local: {
    email: String,
    password: String
  }
})

UserSchema.methods.encrypt = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

UserSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.local.password)
}

const Nom = mongoose.model('Nom', NomSchema)
const User = mongoose.model('User', UserSchema)

module.exports = Nom
module.exports = User
