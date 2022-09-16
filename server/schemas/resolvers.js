const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const { User, Resource, Contact } = require("../models");

const resolvers = {
	Query: {
		resources: async (parent, { resourceName }) => {
			const params = resourceName ? { resourceName } : {};
			return await Resource.find(params);
		},

		resource: async (parent, { _id }) => {
			return await Resource.findById({ _id });
		},

		users: async () => {
			return User.find().select("-__v -password");
		},

		user: async (parent, args, context) => {
			if (context.user) {
				const userData = await User.findById({ _id: context.user._id }).select(
					"-__v -password"
				);

				return userData;
			}
			throw new AuthenticationError("Not logged in");
		},
		contacts: async (parent, { email }) => {
			const params = email ? { email } : {};
			return Contact.find(params).sort({ createdAt: -1 });
		},
		contact: async (parent, { _id }) => {
			return Contact.findOne({ _id });
		},
	},

	Mutation: {
		addUser: async (parent, args) => {
			const user = await User.create(args);
			const token = signToken(user);

			return { token, user };
		},
		updateUser: async (parent, args, context) => {
			if (context.user) {
				return await User.findByIdAndUpdate(context.user._id, args, {
					new: true,
				});
			}

			throw new AuthenticationError("Not logged in");
		},
		addContact: async (parent, args, context) => {
			if (context.user) {
				const contact = await Contact.create({
					...args,
					email: context.user.email,
				});

				await User.findByIdAndUpdate(
					{ _id: context.user._id },
					{ $push: { contacts: contact._id } },
					{ new: true }
				);

				return contact;
			}

			throw new AuthenticationError("Not logged in");
		},

		login: async (parent, { email, password }) => {
			const user = await User.findOne({ email });

			if (!user) {
				throw new AuthenticationError("Incorrect credentials");
			}

			const correctPw = await user.isCorrectPassword(password);

			if (!correctPw) {
				throw new AuthenticationError("Incorrect credentials");
			}

			const token = signToken(user);
			return { token, user };
		},

		// Do we need mutations for resources? There would be no need to add or update a resource by someone using the app.
	},
};

module.exports = resolvers;
