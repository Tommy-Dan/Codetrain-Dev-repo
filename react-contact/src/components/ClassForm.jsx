import React, { Component } from "react";

class ClassForm extends Component {
    constructor(props) {
        super();
        this.state = {
            info: [
                {
                    name: "Tom",
                    email: "tom@gmail.com",
                    password: "tom@12345"
                },
                {
                    name: "Seth",
                    email: "seth110@gmail.com",
                    password: "seth@12345"
                }
            ],
            name: "",
            email: "",
            password: ""
        };
    }

    handleLogin = (e) => {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            info: [
                ...this.state.info,
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
        return(
            <div className="container">
              <form action="">
              <div className="form-inner">
                  <h2>Login</h2>
                  <div className="form-group">
                    <label htmlFor="">Name:</label>
                    <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleLogin} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Email:</label>
                    <input type="text" name="email" placeholder="email" value={this.state.email} onChange={this.handleLogin} />
                  </div>
                  <div className="form-group">
                    <label>Password:</label>
                    <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleLogin} />
                  </div>

                  <button onClick={this.handleSubmit}>Sign-in</button>
                </div>
              </form>
              
              <div className="display">
                {
                    this.state.info.map((info, index) => {
                        return (
                            <div key={index} className="b-space">
                                <div className="m-left">
                                    <h5>Name: <span>{info.name}</span></h5>
                                    <h5>Email: <span>{info.email}</span></h5>
                                    <h5>Password: <span>{info.password}</span></h5>
                                </div>
                            </div>
                    )
                   })
                }
              </div>
              
            </div>
        )
    }
}

export default ClassForm;