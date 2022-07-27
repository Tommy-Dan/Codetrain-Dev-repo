import React, { Component, useState} from 'react';


class ClassForm extends Component {
    state = useState({
            name: "", 
            email: "", 
            password: ""
    });

    handleName = (event) => {
        this.setState(
          {Name: event.target.value}
        );
    }

    handleEmail = (event) => {
        this.setState(
          {Email: event.target.value}
        );
    }

    handlePassword = (event) => {
        this.setState(
          {Password: event.target.value}
        );
    }
  
    handleSubmit = (event) => {
      event.preventDefault();
      console.log(
          {
              Name: this.state.name,
              Email: this.state.email,
              Password: this.state.password       
          }
      );
      
    }

    render() {
        return (
          <form action="" onSubmit={this.handleSubmit}>
                <div className="form-inner">
                    <h2>Login</h2>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input onChange={this.handleName} type="text" name="name" id="name" value={this.state.Name} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email: </label>
                        <input onChange={this.handleEmail} type="email" name="email" id="email" value={this.state.Email} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input onChange={this.handlePassword} type="password" name="password" id="password" value={this.state.Password} />
                    </div>
                    <input type="submit" value="LOGIN" />
                </div>
          </form>
        );
    }
}
export default ClassForm;