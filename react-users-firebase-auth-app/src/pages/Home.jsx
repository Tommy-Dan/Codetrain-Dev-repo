import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import AddUserForm from "../components/AddUserForm";
import AllUsers from "../components/AllUsers";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";

function Home() {
	const handleClose = () => {
		signOut(auth);
	};
	return (
		<Container style={{ marginTop: "30px" }}>
			<Row>
				<Col>
					<Button 
				      style={{
							  display: "flex",
							  border: "3px", 
							  width: "75px",
							  margin: "0 10px 45px 70rem"

							}} onClick={handleClose} variant="danger">
						Logout
					</Button>
				</Col>
			</Row>
			<Row>
				<Col>
					<AddUserForm />
				</Col>

				<Col>
					<AllUsers />
				</Col>
			</Row>
			
		</Container>
	);
}

export default Home;
