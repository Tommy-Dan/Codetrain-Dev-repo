import React, { useState } from "react";
import { Card, Button, Col, Modal } from "react-bootstrap";
import EditUserForm from "./EditUserForm";
import { connect, useDispatch } from "react-redux";
import { RemoveContact } from "../actions/userActions";



function Contact(props) {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const dispatch = useDispatch();

	const handleDelete = () => {
		dispatch(RemoveContact(props.contactInfo.id));
		// props.RemoveContact(props.contactInfo.id);
	};
	return (
		<>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Edit User</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<EditUserForm
						editUser={props.editUser}
						hide={handleClose}
						contactInfo={props.contactInfo}
					/>
				</Modal.Body>
			</Modal>
			<Col md={4}>
				<Card>
					<Card.Body>
						<Card.Title>Name: {props.contactInfo.name}</Card.Title>
						<Card.Subtitle className="mb-2 text-muted">
							Location:{props.contactInfo.location}
						</Card.Subtitle>
						<Card.Text>Phone# :{props.contactInfo.phone}</Card.Text>
						<Button variant="primary" onClick={handleShow}>
							Edit
						</Button>
						<Button variant="danger" onClick={handleDelete} href="#">
							Delete Me
						</Button>
					</Card.Body>
				</Card>
			</Col>
		</>
	);
}

const mapDispatchToProps = {
	RemoveContact,
};
export default connect(null, mapDispatchToProps)(Contact);
