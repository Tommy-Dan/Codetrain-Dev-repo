import '../App.css';
import React, { Component } from 'react';



class UsersClass extends Component {
    constructor(props) {
		super();
		this.state = { users: [] };
	}

    componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            response.json()
            .then((data) => {
            this.setState({ users: data });
                console.log(data);
            });
        })

        .catch((error) => {
            console.log(error);
        });
	}
    render() {
        return (
            <>
                {this.state.users.map((user, id) => {
					return (
						<div className='d-format'>
							<h3>Name: <span>{user.name}</span></h3>
							<h3>Username: <span>{user.username}</span></h3>
							<h3>Email: <span>{user.email}</span></h3>
						</div>
					);
				})}
            </>
        )
    }
}

export default UsersClass;
