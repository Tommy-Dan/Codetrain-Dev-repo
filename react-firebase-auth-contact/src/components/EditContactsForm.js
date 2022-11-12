import { doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { Form, Button } from "react-bootstrap";




const EditUserForm = ({ contactData, hide }) =>{
  const [name, setName] = useState(contactData.name);
  const [phone, setPhone] = useState(contactData.phone);
  const [address, setAddress] = useState(contactData.address);


  const handleSubmit = async (e) => {
    e.preventDefault();
    let contactInfo = { name, id: contactData.id, phone, address};
    try {
      const userRef = doc(db, "contacts", contactInfo.id);
      await updateDoc(userRef, contactInfo);
    } catch (error) {
    }
    setName("");
    setPhone("");
    setAddress("");
    hide();
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="text"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="gen"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
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
