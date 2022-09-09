const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { User, Resource } = require('../models');

const resolvers = {
    Query: {
        resources: async (parent, { resourceName }) => {
            const params = resourceName ? { resourceName } : {};
            return await Resource.find(params).sort({ _id });
        },

        resource: async (parent, { _id }) => {
            return await Resource.findById({ _id })
        },

        users: async () => {
            return User.find()
            .select('-__v -password');
        },

        user: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findById({ _id: context.user._id })
                .select('-__v -password');

                return userData;
            }
            throw new AuthenticationError('Not logged in');
        }
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        }
    }
}

module.exports = resolvers;