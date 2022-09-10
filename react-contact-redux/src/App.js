import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";
import Users from "./components/Users";
import AddUserForm from "./components/AddUserForm";


function App(props) {
  const [contact, setContact] = useState([
    {
      name: "Anabel", 
      email: "anabel110@yahoo.com",
      gen: "21"
    },
    {
      name: "Franklyn", 
      email: "frankon22@gmail.com",
      gen: "20"
    },
    {
      name: "Demia", 
      email: "Demia1@gmail.com",
      gen: "25"
    },
  ]);
  const addNewContact = (user) => {
    user.id = Math.random();
    setContact([...contact, user]);
    console.log(user);
  };

  const deleteContact = (id) => {
    setContact(
      contact.filter((user) => {
        if (user.id !== id) {
          return user;
        }
      })
    );
  };
  const editContact = (id, newContact) => {
    setContact(
      contact.map((user) => {
        if (user.id === id) {
          return newContact;
        }
        return user;
      })
    );
  };

  return (
    <div className="App">
      <>
        <Container style={{ marginTop: "30px"}}>
          <Row>
            <Col>
              <AddUserForm newContact={addNewContact} />
            </Col>
            <Col>
              <Users 
                userData={addNewContact}
                editContact={editContact}
                delete={deleteContact}
              />
            </Col>
          </Row>
        </Container>
      </>
    </div>
  );
}

export default App;
