const Nom = require('../Models/Nom')
const recipe = require('./seeds.json')

Nom.remove({}).then(() => {
  return Nom.collection.insert(recipe)
}).then(() => {
  process.exit()
})
