import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./holder.css";

const FormCom = (props) => {
    const [name, setName] = useState("");
	const [contact, setContact] = useState("");
	const [location, setLocation] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		props.newContact({ name, contact, location });
		setName("");
		setContact("");
		setLocation("");
	};
  return (
    <div className="m-top">
        <h4 className="h4">Add new contact</h4>
      <Form>
            
            <input   className="input"
                    type="Name"
                    value={name}
                     placeholder="Name"
                    onChange={(e) => {
                        setName(e.target.value);
                    }}/>
                
            		
            <input className="input"
                    type="text"
                    placeholder="Contact"
                    value={contact}
                    onChange={(e) => {
                        setContact(e.target.value);
                    }}/>

            
            <input className="input"
                    type="text"
                    placeholder="Address"
                    value={location}
                    onChange={(e) => {
                        setLocation(e.target.value);
                    }} />
                

            <button onClick={handleSubmit} className="btnn" type="submit">
                Submit
            </button>
        </Form>
    </div>
  )
}

export default FormCom
