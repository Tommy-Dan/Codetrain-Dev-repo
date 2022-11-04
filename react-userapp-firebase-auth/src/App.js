import './App.css';
import React, { useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import AddUserForm from './components/AddUserForm';
import AllUsers from "./components/AllUsers";
import EditUserForm from "./components/EditUserForm";
import User from './components/User';
import { deleteUser } from 'firebase/auth';
import {collection, orderBy, query, getDocs, onSnapshot} from "firebase/firestore";
import {db} from "./firebase/firebaseConfig";
import {addUser} from "./actions/userActions";
import {useDispatch} from "react-redux";




function App() {
  const dispatch = useDispatch();
  useEffect(() =>{
    try{
      const readData = async () =>{
        const q = query(collection(db, "usersContact"), orderBy("timestamp", "desc"));
        const unsubscribe = await onSnapshot(q, (querySnapshot) =>{
          const users = [];
          querySnapshot.forEach((doc) =>{
            users.push(doc.data());
          });
          dispatch(addUser(users));
          console.log(users);
        });
      };
      readData();
    }catch(e) {
      console.log(e);
    }
  }, [dispatch]);

	const AddNewUser = (user) => {
		user.id = Math.random().toString(36);
		setUsers([
			...users,{ id: user.id, name: user.name, email: user.email, gen: user.gen },
		]);
		console.log(user);
	};
	//delete user from users array
	const deleteUser = (id) => {
		//tenary operator to delete user from users array
		setUsers(users.filter((user) => user.id !== id));

		setUsers(users.filter((user) => (user.id !== id ? user : null)));

		//normal if else statement to delete user from users array
		setUsers(
			users.filter((user) => {
				if (user.id !== id) {
					return user;
				}
			})
		);
	};
	//edits user in users array
	const handleEdit = (id, newInfo) => {
		//normal if else statement to edit user from users array
		setUsers(
			users.map((user) => {
				if (user.id !== id) {
					return user;
				}
				return newInfo;
			})
		);
		//tenary operator to edit user from users array
		setUsers(users.map((user) => (user.id === id ? newInfo : user)));
		setUsers(
			users.map((user) => {
				if (user.id === id) {
					return newInfo;
				}
				return user;
			})
		);
	};
  return (
    <>
     <Container>
       <Row>
         <Col>
            <AddUserForm 
               newUser={AddNewUser}
            />
         </Col>
         <Col>
           <AllUsers
             userData={users}
             deleteUser={deleteUser}
             editUser={handleEdit}
           />
         </Col>
       </Row>
     </Container>
    </>
  );
}

export default App;
