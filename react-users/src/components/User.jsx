import React from 'react';
import {Card, Col, Button } from "react-bootstrap";



const User = (props) =>  {
  const handleDelete = (e) => {
    e.preventDefault();
    console.log('Item deleted');
  }
  return (
    <Col md={4} style={{marginBottom: "1rem"}} className="main-col">
        <Card className='card'>
            <Card.Body>
                <Card.Title>Name:  {props.userBio.name}</Card.Title>

                <Card.Text>Gender:  {props.userBio.gender}</Card.Text>

                <Card.Text>Gen:  {props.userBio.gen}</Card.Text>

                <Card.Text>
                  Email:   {props.userBio.email}
                </Card.Text>

                <Button href='#' size='sm' variant="primary">Edit</Button>
                <Button href='#' size='sm' variant="danger" onClick={handleDelete}>Delete</Button>
            </Card.Body>
        </Card>
    </Col>
  )
};

export default User;