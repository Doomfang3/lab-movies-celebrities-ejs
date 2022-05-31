//  Add your code here
const {model, Schema} = require('mongoose')
const Celebrities = require("./Celebrity.model")

const movies = new Schema({
    title : String,
    genre : String,
    plot : String, 
    cast  : [{ type: Schema.Types.ObjectId, ref: Celebrities }]
})

const movieModel = model('Movie', movies)

module.exports = movieModel;