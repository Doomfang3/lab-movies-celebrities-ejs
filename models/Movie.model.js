const { Schema, model, ObjectId } = require("mongoose");
const Celebrity = require("./Celebrity.model.js");

const movieSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	genre: {
		type: String,
		default: "Unknown",
	},
	plot: {
		type: String,
		default: "Unknown",
	},
	cast: {
		type: [ObjectId],
		ref: Celebrity,
	},
});

const Movie = model("movie", movieSchema);

module.exports = Movie;
