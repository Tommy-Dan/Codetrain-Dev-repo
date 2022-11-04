import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import {
	collection,
	orderBy,
	query,
	onSnapshot,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { db, auth } from "./firebase/config";
import { addUser } from "./actions/userActions";
import { useDispatch } from "react-redux";
import Routing from "./Routing";
import { authUser } from "./actions/authActions";

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		try {
			const readData = async () => {
				const q = query(collection(db, "authUsers"), orderBy("timestamp", "desc"));
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
	}, [dispatch]);

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				dispatch(authUser(user));
			} else {
				dispatch(authUser(null));
			}
		});
	}, [dispatch]);

	return (
		<>
			<Container>
				<Routing />
			</Container>
		</>
	);
}

export default App;
