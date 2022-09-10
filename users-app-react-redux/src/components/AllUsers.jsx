import { Container, Row } from "react-bootstrap";
import User from "./User";


function AllUsers({users, addUser}) {
	return (
		<>
			<Container>
				<Row>
					{users.userData.map((user) => {
						return (
							<User
								key={uuid()}
								userInfo={user.name}
								deleteUser={user.deleteUser}
								editUser={user.editUser}
							/>
						);
					})}
				</Row>
			</Container>
		</>
	);
}
const mapState = (state) => {
   return { users: state.users};
};

const mapDispatch = {
	addUser: addUser
};

export default connect(mapState, mapDispatch)(AllUsers);