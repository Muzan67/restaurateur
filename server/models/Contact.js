const mongoose = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const { Schema } = mongoose;

const contactSchema = new Schema({
	message: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
		get: (timestamp) => dateFormat(timestamp),
	},
	email: {
		type: String,
		required: true,
	},
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
