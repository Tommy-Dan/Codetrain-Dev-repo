import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";
import AddUserForm from "./components/AddUserForm";
import AllUsers from "./components/AllUsers";
import "./App.css";

function App() {
  let [users, setsUsers] = useState([
        {name: "Tom", gender: "M", gen: 22, email: "tom@gmail.com"},
        {name: "Seth", gender: "M", gen: 19, email: "seth110@gmail.com"}
      ]);

  const addNewUser = (user) => {
    setsUsers([...users, user]);
  };

  return (
    <Container style={{marginTop: "30px"}}>
      <Row>
        <Col>
           <AddUserForm newUser={addNewUser} />
        </Col>

        <Col>
           <AllUsers userInfo={users} />
        </Col>
      </Row>
    </Container>
    
  );
}

export default App;
