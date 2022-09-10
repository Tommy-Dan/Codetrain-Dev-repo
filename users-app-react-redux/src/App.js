import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import AddUserForm from "./components/AddUserForm";
import AllUsers from "./components/AllUsers";

function App() {
	const [users, setUsers] = useState([]);

	const AddNewUser = (user) => {
		user.id = Math.random().toString(36);
		setUsers([...users,
			{ id: user.id, name: user.name, email: user.email, gen: user.gen },
		]);
	};

	//deleting user from users array:
	const deleteUser = (id) => {
		setUsers(users.filter((user) => (user.id !== id ? user : null)));
	};
  
	//editting user in users array:
	const handleEdit = (id, newInfo) => {
		setUsers(
			users.map((user) => {
				if (user.id === id) {
					return newInfo;
				}
				return user;
			})
		);
	};

	return (
		<>
			<Container>
				<Row>
					<Col>
						<AddUserForm newUser={AddNewUser} />
					</Col>

					<Col>
						<AllUsers
							userData={users}
							deleteUser={deleteUser}
							editUser={handleEdit}
						/>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default App;