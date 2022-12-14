// email, password, firstName, lastName, restaurantName, foodType, businessType

const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
	firstName: {
		type: String,
		required: true,
		trim: true,
	},
	lastName: {
		type: String,
		required: true,
		trim: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
		minlength: 5,
	},
	contacts: [
		{
			type: Schema.Types.ObjectId,
			ref: "Contact",
		},
	],
	restaurantName: {
		type: String,
	},
	// idea: restaurantName, foodType, businessType could all be added through a form on a profile page, after user already creates an account
	foodType: {
		type: String,
	},
	// would we need another model for businessType? (ie. Food Truck, Fast Food, Fine Dining). On that note, do we need another model for foodType? Maybe overkill
	businessType: {
		type: String,
	},
});

userSchema.pre("save", async function (next) {
	if (this.isNew || this.isModified("password")) {
		const saltRounds = 10;
		this.password = await bcrypt.hash(this.password, saltRounds);
	}

	next();
});

userSchema.methods.isCorrectPassword = async function (password) {
	return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
