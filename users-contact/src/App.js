import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import Users from './components/Users';
import AddUserForm from './components/AddUserForm';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          name: "Eyram",
          email: "eyram@gmail.com",
          gen: 21
        },
        {
          id: 2,
          name: "Coker",
          email: "coker@gmail.com",
          gen: 22
        },
        {
          id: 3,
          name: "Adwoa",
          email: "adjoawa@gmail.com",
          gen: 20
        }
      ]
    }
  }

  addNewUser = (user) => {
    user.id = Math.random()
    this.setState({
      users: [...this.state.users, user ]
    })
  }

  deleteUser = (id) => {
     let undeletedUsers = this.state.users.filter(user => user.id !==id)
     this.setState({
      users: undeletedUsers
     })
  }

  editUser = (id, updatedUser) => {
    this.setState({
      users: this.state.users.map(user => user.id === id ? updatedUser : user) 
    })
  }

  render() {
  return (
    <>
       <Container fluid style={{marginTop: "2rem", marginLeft: "16px"}}>
            <Row>
               <Col md="4" style={{border:"2px solid blue", borderRadius:"10px"}}>
                  <h4 style={{margin: "1.5rem", textAlign: "center"}}>Add User Details</h4>
                  <AddUserForm addUser = {this.addNewUser} />
               </Col>
               <Col style={{border:"1.5px solid green", borderRadius:"10px", marginLeft: "20px", marginRight: "22px"}}>
                  <h5 style={{margin: "1.5rem", textAlign: "center"}}>Displayed Users</h5>
                  <Users  usersData={this.state.users} 
                          deleteUser={this.deleteUser} 
                          editUser={this.editUser} 
                  />
               </Col>
            </Row>
       </Container> 
    </>
  );
  }
}

export default App;
