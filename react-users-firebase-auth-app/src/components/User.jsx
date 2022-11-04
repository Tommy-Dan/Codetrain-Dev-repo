import React, { useState } from "react";
import { Card, Button, Col, Modal } from "react-bootstrap";
import EditUserForm from "./EditUserForm";
import { connect } from "react-redux";
import { removeUser } from "../actions/userActions";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/config";

function User(props) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleDelete = async () => {
		try {
			await deleteDoc(doc(db, "authUsers", props.userInfo.id));
		} catch (e) {
			console.log(e);
		}
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
						userInfo={props.userInfo}
					/>
				</Modal.Body>
			</Modal>
			<Col md={10} style={{  marginBottom: "10px" }}>
				<Card>
					<Card.Body>
						<Card.Title>Name: <span style={{marginLeft: "10px"}}>{props.userInfo.name}</span></Card.Title>
						<Card.Subtitle className="mb-2 text-muted">
							Email: <span style={{marginLeft: "10px"}}>{props.userInfo.email}</span> 
						</Card.Subtitle>
						<Card.Text>Gen: <span style={{marginLeft: "10px"}}>{props.userInfo.gen}</span></Card.Text>
						<Button style={{margin: "30px 15px 10px 10px"}} variant="primary" onClick={handleShow}>
							Edit
						</Button>
						<Button style={{margin: "30px 15px 10px 10px"}} variant="danger" onClick={handleDelete} href="#">
							Delete
						</Button>
					</Card.Body>
				</Card>
			</Col>
		</>
	);
}

const mapDispatchToProps = {
	removeUser,
};
export default connect(null, mapDispatchToProps)(User);
