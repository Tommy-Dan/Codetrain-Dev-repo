import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col,} from "react-bootstrap";
import AllNotes from "./components/AllNotes";
import AddNoteForm from "./components/AddNoteForm";


function App() {
	const [notes, setNotes] = useState([]);

	const addNewNote = (note) => {
		note.id = Math.random().toString();
		setNotes([...notes, note]);
		console.log(note)
	};
	const deleteNote = (id) => {
		setNotes(
			notes.filter((note) => {
				if(note.id !== id) {
					return note;
				}
			})
		)
	};
	
	const EditNote = (id, newNote) => {
		setNotes(
			notes.map((note) => {
				if(note.id===id) {
					return newNote;
				}
				return note;
			})
		)
	};
	return (
		<Container style={{marginTop: "30px"}}>
			<Row>
				<Col md={4}>
				<AddNoteForm newNote = {addNewNote}/>
				</Col>
				<Col md={8}>
				<AllNotes noteInfo={notes} EditNote={EditNote} delete={deleteNote}/>
				</Col>
			</Row>
		</Container>
	);
}

export default App;