import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { updateUser } from "../actions/userActions";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";



const EditUserForm =(props) =>{

	const [name, setName] = useState(props.userInfo.name);
	const [email, setEmail] = useState(props.userInfo.email);
	const [gen, setGen] = useState(props.userInfo.gen);
	const dispatch = useDispatch();

	const handleSubmit = async (e) => {
		e.preventDefault();
		let userInfo = { id: props.userInfo.id, name, email, gen };
		try {
			const userRef = doc(db, "usersContact", userInfo.id);
			
			await updateDoc(userRef, userInfo);
		} catch (e) {
			console.log(e);
		}

		setName("");
		setEmail("");
		setGen("");
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
				<Form.Label>Email</Form.Label>
				<Form.Control
					type="email"
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
				/>
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicPassword">
				<Form.Label>Gen</Form.Label>
				<Form.Control
					type="gen"
					value={gen}
					onChange={(e) => {
						setGen(e.target.value);
					}}
				/>
			</Form.Group>

			<Button onClick={handleSubmit} variant="primary" type="submit">
				Submit
			</Button>
		</Form>
	);
}

export default EditUserForm;