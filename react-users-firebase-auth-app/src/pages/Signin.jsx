import "./signin.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { auth } from "../firebase/config";
import {
	signInWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithPopup,
} from "firebase/auth";

import { useNavigate } from "react-router-dom";

function Signin() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const provider = new GoogleAuthProvider();
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const user = await signInWithEmailAndPassword(auth, email, password);
			navigate("/", { replace: true });
			console.log(user);
		} catch (e) {
			alert(e.message);
			
			console.error(e.message);
		}

		setPassword("");
		setEmail("");
	};

	const handleGoogle = async (e) => {
		e.preventDefault();
		try {
			const user = await signInWithPopup(auth, provider);
			console.log(user);
			navigate("/", { replace: true });
		} catch (e) {
			console.error(e.message);
		}
		setEmail("");
		setPassword("");
	};

	return (
		<Form className="login">
			<h2 style={{textAlign: "center"}}>Login</h2>
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
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>password</Form.Label>
				<Form.Control
					type="password"
					value={password}
					onChange={(e) => {
						setPassword(e.target.value);
					}}
				/>
			</Form.Group>

			<Button className="button" onClick={handleSubmit} variant="primary" type="submit">
				Sign In
			</Button>
			<Button className="button1" onClick={handleGoogle} variant="info" type="submit">
				sign In with Google
			</Button>
		</Form>
	);
}


export default Signin;
