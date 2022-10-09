import { Form, Button } from 'react-bootstrap';
import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { updateUser } from "../actions/Action"; => No longer needed
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/Config";



const EditUserForm = (props) => {
	const [name, setName] = useState(props.userInfo.name);
	const [email, setEmail] = useState(props.userInfo.email);
  const [sex, setSex] = useState(props.userInfo.sex);
	const [gen, setGen] = useState(props.userInfo.gen);
	const dispatch = useDispatch();


  const handleSubmit = async (e) => {
    e.preventDefault();
    let userInfo = { id: props.userInfo.id, name, email, sex, gen };

    // dispatch(updateUser(userInfo)); => No longer needed because we're from firebase
    try {
      const contactRef = doc(db, "usersContact", userInfo.id);
      await updateDoc(contactRef, userInfo);
    }
    catch (e){
      console.log(e);
    }

    setName("");
    setEmail("");
    setSex("");
    setGen("");
    props.hide();
  }
  return (
      <Form>
         <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control 
               type="text" 
               name="name" 
               value={name}
               placeholder="Enter name" 
               onChange={(e) => {
                setName(e.target.value);
               }} />
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control 
               type="email" 
               name="email" 
               value={email}
               placeholder="Enter email" 
               onChange={ (e) => {
                setEmail(e.target.value);
               }} />
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Sex</Form.Label>
            <Form.Control 
               type="text" 
               name="sex" 
               value={sex}
               placeholder="eg. male or femal" 
               onChange={ (e) => {
                setSex(e.target.value);
               }} />
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicText">
           <Form.Label>Gen</Form.Label>
           <Form.Control 
              type="text" 
              name="gen" 
              value={gen}
              placeholder="Gen" 
              onChange={ (e) => {
                setGen(e.target.value);
              }} />
         </Form.Group>
         <Button onClick={handleSubmit} variant="primary" type="submit">
            Submit
         </Button>
    </Form>
  );
}

export default EditUserForm;







