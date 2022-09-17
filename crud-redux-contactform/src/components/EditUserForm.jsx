import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { updateContact } from "../actions/userActions";



function EditContactForm(props) {
	const [name, setName] = useState(props.contactInfo.name);
	const [location, setLocation] = useState(props.contactInfo.location);
	const [phone, setPhone] = useState(props.contactInfo.phone);
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		let contactInfo = { id: props.contactInfo.id, name, location, phone };
		dispatch(updateContact(contactInfo));
		setName("");
		setLocation("");
		setPhone("");
		props.hide();
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

export default EditContactForm;
