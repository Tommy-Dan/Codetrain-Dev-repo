import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import AddContactForm from "./components/AddContactForm";
import AllContact from "./components/AllContact";

function App() {
	const [contacts, setContacts] = useState([
		
	]);
	//add new user to the users array(state)
	const AddNewContact = (contact) => {
		contact.id = Math.random().toString(36);
		setContacts([
			...contacts,
			{ id: contact.id, name: contact.name, location: contact.location, phone: contact.phone },
		]);
		console.log(contact);
	};
	//delete contact from contacts array
	const deleteContact = (id) => {
		//tenary operator to delete user from users array
		// setUsers(users.filter((user) => user.id !== id));

		setContacts(contacts.filter((contact) => (contact.id !== id ? contact : null)));

		//normal if else statement to delete user from users array
		// setUsers(
		// 	users.filter((user) => {
		// 		if (user.id !== id) {
		// 			return user;
		// 		}
		// 	})
		// );
	};
	//edits user in users array
	const handleEdit = (id, newInfo) => {
		//normal if else statement to edit user from users array
		// setUsers(
		// 	users.map((user) => {
		// 		if (user.id !== id) {
		// 			return user;
		// 		}
		// 		return newInfo;
		// 	})
		// );
		//tenary operator to edit user from users array
		// setUsers(users.map((user) => (user.id === id ? newInfo : user)));
		setContacts(
			contacts.map((contact) => {
				if (contact.id === id) {
					return newInfo;
				}
				return contact;
			})
		);
	};

	return (
		<>
			<Container>
				<Row>
					<Col>
						<AddContactForm newContact={AddNewContact} />
					</Col>

					<Col>
						<AllContact
							userData={contacts}
							deleteContact={deleteContact}
							editContact={handleEdit}
						/>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default App;
