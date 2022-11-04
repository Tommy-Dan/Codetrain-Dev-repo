import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { v4 as uuid } from "uuid";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { addUser } from "../actions/userActions";



const AddUserForm = (props) => {
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[gen, setGen] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();
        let userInfo = {
            id: uuid(),
            name,
            email,
            gen,
            timestamp: serverTimestamp(),
        };
        try {
            await setDoc(doc(db, 'usersContact', userInfo.id), userInfo);
        }catch (e) {
            // console.log(e)
        }
        setName('');
        setEmail('');
        setGen('');
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
			<Form.Label>Email </Form.Label>
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
  )
}

export default AddUserForm;