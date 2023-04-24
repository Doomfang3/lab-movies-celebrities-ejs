const { Schema, model } = require("mongoose");

const celebritySchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	occupation: {
		type: [String],
		required: true,
		default: ["Unknown"],
	},
	catchPhrase: {
		type: String,
		default: "Unknown",
	},
});

const Celebrity = model("celebrity", celebritySchema);

module.exports = Celebrity;
