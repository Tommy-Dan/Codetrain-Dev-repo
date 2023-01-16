import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AddNewContact } from "./actions/contactActions";
import { auth, db } from "./firebase/firebaseConfig";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { dispatchContact } from "./actions/authAction";
import Routers from "./Routers";



function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const readData = async () => {
      const q = query(collection(db, "contacts"), orderBy("timestamp", "asc"));
      onSnapshot(q, (querySnapshot) => {
        const contactArr = [];
        querySnapshot.forEach((doc) => {
          contactArr.push(doc.data());
        });
        dispatch(AddNewContact(contactArr));
        console.log(contactArr);
      });
    };

    readData();
  }, [dispatch]);

  // useEffect(() => {
  //   onAuthStateChanged(auth, (persons) => {
  //     if (persons) {
  //       dispatch(dispatchContact(persons));
  //     } else {
  //       dispatch(dispatchContact(null));
  //     }
  //   });
  // }, []);

  return (
    <>
      <Routers />
    </>
  );
}

export default App;
