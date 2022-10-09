import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuid } from 'uuid';
import { doc, setDoc, serverTimestamp, timestamp} from 'firebase/firestore';
import { db } from "../firebase/Config";



function AddUserForm(props) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
  const [sex, setSex] = useState("");
	const [gen, setGen] = useState("");

  // const [time, setTime] = useState("");
	const dispatch = useDispatch();

const handleSubmit = async (e) => {
  e.preventDefault();
  let userInfo = {
    id: uuid(),
    name,
    email,
    sex,
    gen,
    timestamp: serverTimestamp(),
  };

  try {
    await setDoc(doc(db, "usersContact", userInfo.id), userInfo);
  } 
  catch (e) {
    console.log(e);
  }
    setName("");
		setEmail("");
    setSex("");
		setGen("");
	};

return (
      <Form>
         <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control 
               type="text" 
               name="name" 
               value={name}
               placeholder="Enter name" 
               onChange={ (e) =>
                 setName(e.target.value)
               } />
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control 
               type="email" 
               name="email" 
               value={email}
               placeholder="Enter email" 
               onChange={ (e) =>
                 setEmail(e.target.value)
               } />
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Sex</Form.Label>
            <Form.Control 
               type="text" 
               name="sex" 
               value={sex}
               placeholder="eg. Male or Female" 
               onChange={ (e) =>
                 setSex(e.target.value)
               } />
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicText">
           <Form.Label>Gen</Form.Label>
           <Form.Control 
              type="text" 
              name="gen" 
              value={gen}
              placeholder="Gen" 
              onChange={ (e) =>
               setGen(e.target.value)
               } />
         </Form.Group>
         <Button onClick={handleSubmit} variant="primary" type="submit" style={{marginBottom: "1.2rem"}}>
            Submit
         </Button>
    </Form>
  );
}

export default AddUserForm;
