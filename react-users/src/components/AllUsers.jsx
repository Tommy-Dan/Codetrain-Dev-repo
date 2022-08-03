import React from 'react';
import User from './User';
import { Row, Container} from "react-bootstrap";


function AllUsers(props) {
  return (
     <Container>
         <Row>
             {props.userInfo.map((item) => {
                return <User userBio={item} key={item.id} />
             })}
         </Row>
     </Container>
  )
}

export default AllUsers;