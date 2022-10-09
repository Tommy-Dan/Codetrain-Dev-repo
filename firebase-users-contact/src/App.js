import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { collection, orderBy, query, getDocs, onSnapshot } from 'firebase/firestore';
import { db } from "./firebase/Config";
import { useDispatch } from "react-redux";
import AddUserForm from './components/AddUserForm';
import Users from './components/Users';
import { addUser } from "./actions/Action";


const App =  () => {
  const dispatch = useDispatch();
  useEffect( () => {
    try {
      const readData = async () => {
        const q = query(collection(db, "usersContact"), orderBy("timestamp", "desc"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const users = [];
        querySnapshot.forEach((doc) => {
          users.push(doc.data());
        });
        dispatch(addUser(users));
        console.log(users); 
        });
      };
      readData();

    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <>
       <Container fluid style={{marginTop: "2rem", marginLeft: "16px"}}>
            <Row>
               <Col md="4" style={{border:"2px solid blue", borderRadius:"10px"}}>
                  <h4 style={{margin: "1.5rem", textAlign: "center"}}>Add User Details</h4>
                  <AddUserForm />
               </Col>
               <Col style={{border:"1.5px solid green", borderRadius:"10px", marginLeft: "20px", marginRight: "22px"}}>
                  <h5 style={{margin: "1.5rem", textAlign: "center"}}>Displayed Users</h5>
                  <Users />
               </Col>
            </Row>
       </Container> 
    </>
  );
  }

export default App;
