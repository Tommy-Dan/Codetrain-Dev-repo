import React from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { AddNote } from "../action/Actions";
import {connect} from "react-redux";
import { v4 as uuid } from "uuid";
// import ReactDatePicker from "react-datepicker";

function AddNoteForm(props) {
	const [title, setTitle] = useState("");
	const [date, setDate] = useState("");
	const [content, setContent] = useState("");

	const handleChange = (e) => {
		setContent(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		props.AddNote({id:uuid(), title, date, content });
	
		setTitle("");
		setDate("");
		setContent("");
	};

	return (
		<Form>
			<Form.Group className="mb-3" controlId="formBasicTitle">
				<Form.Label>Title</Form.Label>
				<Form.Control
					type="text" name="name"
					value={title}
					onChange={(e) => {
						setTitle(e.target.value);
					}}
				required/>
			</Form.Group>
			<Form.Group className="mb-3" controlId="formBasicTitle">
				<Form.Label>Date </Form.Label>
				<Form.Control
					type="text" name="date"
					value={date}
					onChange={(e) => {
						setDate(e.target.value);
					}}
					/>
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicContent">
				<Form.Label>Notes</Form.Label>
				<Form.Control type="text" name="note" 
                      value={content} onChange={handleChange} 
                      as="textarea" rows={5}
         required
        />
			</Form.Group>

			<Button variant="primary" type="submit" onClick={handleSubmit}>
				Submit
			</Button>
		</Form>
	);
}
const mapDispatchToProps = {
	AddNote: AddNote,
};

export default connect(null, mapDispatchToProps)(AddNoteForm);
       