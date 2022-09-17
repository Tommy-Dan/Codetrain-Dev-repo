import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { addContact } from "../actions/userActions";
import { connect } from "react-redux";
import { v4 as uuid } from "uuid";


function AddContactForm(props) {
	const [name, setName] = useState("");
	const [location, setLocation] = useState("");
	const [phone, setPhone] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		let contactInfo = { id: uuid(), name, location, phone };

		props.addContact(contactInfo);
		setName("");
		setLocation("");
		setPhone("");
	};

	return (
		<Form>
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Name</Form.Label>
				<Form.Control
					type="Name"
					value={name}
					onChange={(e) => {
						setName(e.target.value);
					}}
				/>
			</Form.Group>
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Location address</Form.Label>
				<Form.Control
					type="text"
					value={location}
					onChange={(e) => {
						setLocation(e.target.value);
					}}
				/>
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicPassword">
				<Form.Label>Phone#</Form.Label>
				<Form.Control
					type="text"
					value={phone}
					onChange={(e) => {
						setPhone(e.target.value);
					}}
				/>
			</Form.Group>

			<Button onClick={handleSubmit} variant="primary" type="submit">
				Submit
			</Button>
		</Form>
	);
}

const mapDispatchToProps = {
	addContact: addContact,
};

export default connect(null, mapDispatchToProps)(AddContactForm);

