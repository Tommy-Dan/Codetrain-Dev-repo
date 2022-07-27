import React from 'react';
import {Card, Col, Button } from "react-bootstrap";

function User(props) {
  return (
    <Col md={3} className="main-col">
        <Card className='card'>
            <Card.Body>
                <Card.Title>Name:  {props.userBio.name}</Card.Title>

                <Card.Text>Gender:  {props.userBio.gender}</Card.Text>

                <Card.Text>Gen:  {props.userBio.gen}</Card.Text>

                <Card.Text>
                  Email:   {props.userBio.email}
                </Card.Text>


                <Button href='#' size='sm' variant="primary">Edit</Button>
                <Button href='#' size='sm' variant="danger">Delete</Button>
            </Card.Body>
        </Card>
    </Col>
  )
};

export default User;