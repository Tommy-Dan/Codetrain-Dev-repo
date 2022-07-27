import React, { Component } from "react";

class ClassForm extends Component {
  constructor(props) {
    super();
    this.state = {
      info: [
        {
          name: "Tom",
          email: "tom@gmail.com",
          password: "t0m@12345",
        },
        {
          name: "Seth",
          email: "seths12@gmail.com",
          password: "seth@2001",
        },
      ],
      name: "",
      email: "",
      password: "",
    };
  }
  handleLogin = (event) => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      info: [
        ...this.state.students,
        {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password
        },
      ],

      name: "",
      email: "",
      password: ""
    });
  };

  render() {
    return (
      <>
        <form>
          <div>
            <h1>Login</h1>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleLogin}
            />
            <label>Email:</label>
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleLogin}
            />
            <label>Password:</label>
            <input
              type="text"
              name="contact"
              value={this.state.contact}
              onChange={this.handleLogin}
            />
            <input type="submit" value="LOGIN" />
          </div>
        </form>

        {this.state.students.map((student, index) => {
          return (
            <div key={index}>
              <h1>name:{student.name}</h1>
              <h2>email : {student.email}</h2>
              <h3>contact : {student.contact}</h3>
              <h3>addressline : {student.addressline}</h3>
            </div>
          );
        })}
      </>
    );
  }
}

export default ClassForm;
