import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { EditNote } from "../action/Actions";


function EditNoteForm(props) {
	const [title, setTitle] = useState(props.noteInfo.title);
	const [date, setDate] = useState(props.noteInfo.date);
	const [content, setContent] = useState(props.noteInfo.content);
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		const newNote={
			id: props.noteInfo.id, title, date, content }
		dispatch(EditNote(newNote))
		console.log(newNote);

		setTitle("");
		setDate("");
		setContent("");
		props.handleClose();
	};
	return (
			<Form onSubmit={handleSubmit} >
				<Form.Group className="mb-3" controlId="formBasicAuthor">
					<Form.Label>Title</Form.Label>
					<Form.Control
						type="text"
						value={title}
						onChange={(e) => {
							setTitle(e.target.value);
						}}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicAuthor">
					<Form.Label>Date</Form.Label>
					<Form.Control
						type="text"
						value={date}
						onChange={(e) => {
							setDate(e.target.value);
						}}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Notes</Form.Label>
					<Form.Control
						type="text"
						value={content}
						onChange={(e) => {
							setContent(e.target.value);
						}}
					/>
				</Form.Group>

				<Button  variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		
	);
}

export default EditNoteForm;