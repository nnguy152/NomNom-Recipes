const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/users')

mongoose.Promise = Promise

module.exports = mongoose
