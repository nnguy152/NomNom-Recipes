const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/Noms')

mongoose.Promise = Promise

module.exports = mongoose
