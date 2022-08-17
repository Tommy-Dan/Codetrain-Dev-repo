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
						<div>
							<h1>Id:</h1> <span>{user.id}</span>
							<h1>Name:</h1> <span>{user.name}</span>
							<h1>Username:</h1> <span>{user.username}</span>
							<hr />
						</div>
					);
				})}
            </>
        )
    }
}

export default UsersClass;
