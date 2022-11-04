import { Container, Row } from "react-bootstrap";
import User from "./User";
import { useSelector } from "react-redux";

function AllUsers(props) {
	const  users  = useSelector((state) => {
		return state.UsersReducer.users
	});
	return (
		<>
			<Container>
				<Row>
					{users.map((item, index) => {
						return (
							<User
								key={item.id}
								userInfo={item}
								deleteUser={props.deleteUser}
								editUser={props.editUser}
							/>
						);
					})}
				</Row>
			</Container>
		</>
	);
}

export default AllUsers;
