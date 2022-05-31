//  Add your code here
const {model, Schema} = require('mongoose')

const celebrities = new Schema({
    name: String,
    occupation: String,
    catchPhrase: String, 
})

const celebrityModel = model('Celebrity', celebrities)

module.exports = celebrityModel;