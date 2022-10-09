import React, { useState } from 'react';
import { Button, Card, Col, Modal } from 'react-bootstrap';
import { connect, useDispatch } from "react-redux";
import EditUserForm from './EditUserForm';
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/Config";


const User = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)
  const dispatch = useDispatch();

  const handleDelete = async(e) => {
        // e.preventDefault();
        // dispatch(revoveUser(props.userInfo.id))
        try {
          await deleteDoc(doc(db, "usersContact", props.userInfo.id));
        } catch (e) {
          console.log(e);
        }
};
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <EditUserForm 
               editUser={props.editUser}
               userInfo={props.userInfo} 
               hide={handleClose}
            />
        </Modal.Body>
        
      </Modal>

      <Col md="4" style={{marginBottom: "1rem"}}>
        <Card>
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">
                    Firebase Contrain Contact App
                </Card.Subtitle>
                <Card.Title>Name: {props.userInfo.name}</Card.Title>
                <Card.Text>
                    <p>Email: {props.userInfo.email}</p>
                    <p>Sex: {props.userInfo.sex}</p>
                    <p>Gen: {props.userInfo.gen}</p>
                    {/* <p>Gen: {props.userInfo.timestamp}</p> */}
                </Card.Text>
                <Card.Link href="#" onClick={handleShow}>
                    <Button variant="primary" size="sm">Edit</Button>
                </Card.Link>
                <Card.Link href="#">
                    <Button variant="danger" size="sm" onClick={handleDelete}>Delete</Button>
                </Card.Link>
              </Card.Body>
          </Card>
       </Col>
    </>
  );
}

export default User;
