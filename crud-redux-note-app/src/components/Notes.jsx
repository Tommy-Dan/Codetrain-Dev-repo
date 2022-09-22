import React,  { useState } from "react";
import { Col, Card, Button, Modal} from "react-bootstrap";
import { connect } from "react-redux";
import EditNote from "./EditNote";
import { DeleteNote } from "../action/Actions";

function Notes(props) {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const handleDelete = (e) => {
		e.preventDefault();
		props.DeleteNote(props.noteInfo.id);
};
	
	return (
		<>
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Tom note taking app</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<EditNote EditNote={props.EditNote} noteInfo={props.noteInfo} handleClose={handleClose}/>
			</Modal.Body>
		</Modal>
		
		<Col md={6} style={{marginBottom: "10px"}}>
			<Card>
				<Card.Body>
						<Card.Title>Title:  {props.noteInfo.title}</Card.Title>
                        <br />
						<Card.Subtitle className="mb-2 text-muted">Date:  {props.noteInfo.date}</Card.Subtitle>
						<Card.Text>Notes:  {props.noteInfo.content}</Card.Text>
					   <Button href="#" variant="success" style={{marginLeft: "1rem"}} onClick={handleShow}> Edit</Button>
					   <Button href="#" variant="danger" style={{marginLeft: "1rem"}} onClick={handleDelete}> Delete</Button>
			   </Card.Body>
		  </Card>
	  </Col>
	  </>
	);
};
const mapDispatchToProps = {
	DeleteNote: DeleteNote
};

export default connect(null, mapDispatchToProps)(Notes);
// export default Book;