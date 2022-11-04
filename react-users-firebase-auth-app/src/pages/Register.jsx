import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

function AddUserForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const user = await createUserWithEmailAndPassword(auth, email, password);
			console.log(user);
			navigate("/signin" , {replace:true});
		} catch (e) {
			console.error(e.message);
		}
		setEmail("");
		setPassword("");
	};

	return (
		<Form className="register">
			<h2 style={{textAlign: "center"}}>Register/Sign up</h2>
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Email</Form.Label>
				<Form.Control
					type="email"
					placeholder="example@gmail.com"
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
				/>
			</Form.Group>
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>password</Form.Label>
				<Form.Control
					type="password"
					placeholder="enter your password"
					value={password}
					onChange={(e) => {
						setPassword(e.target.value);
					}}
				/>
			</Form.Group>

			<Button style={{width: "85px"}} onClick={handleSubmit} variant="primary" type="submit">
				Submit
			</Button>
		</Form>
	);
}

export default AddUserForm;
