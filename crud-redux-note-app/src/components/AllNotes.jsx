import React from "react";
import {Container, Row} from "react-bootstrap";
import { useSelector } from "react-redux";
import Notes from "./Notes";

const AllNotes = (props) => {



const  {notes} = useSelector ((state) => {
	return state
})

	return (
		
		<Container>
			<Row>
					{notes.map((item, index) => {
						return (
						<Notes 
							key={index} 
							noteInfo={item}
							delete={props.delete}
							EditNote={props.EditNote}
						/>
					);
			           })}
	      </Row>
	   </Container>
	);
}

export default AllNotes;