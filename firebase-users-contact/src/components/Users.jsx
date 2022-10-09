import { Container, Row } from "react-bootstrap";
import { connect, useSelector } from "react-redux";
import User from "./User";



const Users = (props) => {
  const { users } = useSelector((state) => {
		return state;
	});
  return (
    <Container>
        <Row>
            {
                users.map((user, id) => {
                    return(
                      <User 
                          key={user.id} 
                          userInfo={user} 
                          deleteUser={props.deleteUser}
                          editUser={props.editUser}
                      />
                    )
                })
            }
        </Row>
    </Container>
  );
}

export default Users;
