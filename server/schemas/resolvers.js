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

        user: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                .select('-__v -password');

                return userData;
            }
            throw new AuthenticationError('Not logged in');
        }
    }
}

module.exports = resolvers;