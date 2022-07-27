import React, { useState } from 'react';
import {Form, Button} from "react-bootstrap";

function AddUserForm(props) {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [gen, setGen] = useState("");
    const [email, setEmail] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        props.newUser({name, gender, gen, email});
        setName("");
        setGender("");
        setGen("");
        setEmail("")
    };
  return (
    <div>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control 
                  type="name" 
                  placeholder="Enter your name"
                  value={name}
                  onChange={ (e) => {
                    setName(e.target.value)
                  }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicGender">
              <Form.Label>Gender</Form.Label>
              <Form.Control 
                  type="gender" 
                  placeholder="Your gender" 
                  value={gender}
                  onChange={ (e) => {
                    setGender(e.target.value)
                  }}
               />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicGen">
              <Form.Label>Gen</Form.Label>
              <Form.Control 
                  type="gen" 
                  placeholder="gen" 
                  value={gen}
                  onChange={ (e) => {
                    setGen(e.target.value)
                  }}
               />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                  type="email" 
                  placeholder="Email address" 
                  value={email}
                  onChange={ (e) => {
                    setEmail(e.target.value)
                  }}
               />
            </Form.Group>

            <Button onClick={handleSubmit} variant="primary" type="submit">Submit</Button>
        </Form>
    </div>
  )
}

export default AddUserForm;