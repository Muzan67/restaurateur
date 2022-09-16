import { gql } from "@apollo/client";

export const QUERY_CONTACTS = gql`
	query Query($email: String) {
		contacts(email: $email) {
			_id
			message
			createdAt
			email
		}
	}
`;

export const QUERY_CONTACT = gql`
	query Query($id: ID!) {
		contact(_id: $id) {
			_id
			message
			createdAt
			email
		}
	}
`;
