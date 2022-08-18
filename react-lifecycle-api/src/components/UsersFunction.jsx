import React, { useState, useEffect } from "react";
import axios from "axios";




function UsersFunction() {
    const [users, setUsers] = useState([]);
        useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {users.map((user, id) => {
        return(
            <div key={user.id} className='d-format'>
                <h3>Name: <span>{user.name}</span></h3>
				<h3>Username: <span>{user.username}</span></h3>
				<h3>Email: <span>{user.email}</span></h3>
            </div>
        );
      })}
    </>
  )
}

export default UsersFunction;