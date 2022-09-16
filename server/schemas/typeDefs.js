const { gql } = require("apollo-server-express");
const typeDefs = gql`
	type Resource {
		_id: ID
		resourceName: String
		description: String
		image: String
		links: String
		estimatedCost: Int
	}
	type User {
		_id: ID
		firstName: String
		lastName: String
		email: String
		restaurantName: String
		businessType: String
		foodType: String
	}
	type Contact {
		_id: ID
		message: String
		createdAt: String
		email: String
	}
	type Auth {
		token: ID
		user: User
	}
	type Query {
		resources(resource: ID, resourceName: String): [Resource]
		resource(_id: ID!): Resource
		user: User
		users: [User]
		contact(_id: ID!): Contact
		contacts(email: String): [Contact]
	}
	type Mutation {
		addUser(
			firstName: String!
			lastName: String!
			email: String!
			password: String!
		): Auth
		addResource(resources: [ID]!): Resource
		updateUser(
			restaurantName: String
			foodType: String
			BusinessType: String
			password: String
		): User
		updateResource(
			_id: ID!
			links: String
			description: String
			estimatedCost: Int
			image: String
		): Resource
		addContact(message: String!): Contact
		login(email: String!, password: String!): Auth
	}
`;
module.exports = typeDefs;
