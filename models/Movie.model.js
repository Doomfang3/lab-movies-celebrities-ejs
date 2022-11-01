//  Add your code here
const { Schema, model } = require('mongoose')

const MovieSchema = new Schema({
  title: String,
  genre: String,
  plot: String,
  cast: [String],
})

const Movie = model('movie', MovieSchema)
module.exports = Movie

