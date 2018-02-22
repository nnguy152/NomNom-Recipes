const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/noms')

mongoose.Promise = Promise

module.exports = mongoose
