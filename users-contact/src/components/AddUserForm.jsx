import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';



class AddUserForm extends Component {
  constructor(props) {
    super(props);
    this.state={
      name: "",
      email: "",
      gen: ""
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name] : e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addUser(this.state);
    this.setState({
      name: "",
      email: "",
      gen: ""
    });
  }


  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
         <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control 
               type="text" 
               name="name" 
               value={this.state.name}
               placeholder="Enter name" 
               onChange={this.handleChange} />
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control 
               type="email" 
               name="email" 
               value={this.state.email}
               placeholder="Enter email" 
               onChange={this.handleChange} />
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicText">
           <Form.Label>Gen</Form.Label>
           <Form.Control 
              type="text" 
              name="gen" 
              value={this.state.gen}
              placeholder="Gen" 
              onChange={this.handleChange} />
         </Form.Group>
         <Button variant="primary" type="submit" style={{marginBottom: "1.2rem"}}>
            Submit
         </Button>
    </Form>
  );
}
}

export default AddUserForm;
