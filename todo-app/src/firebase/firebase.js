import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB9H6E9RNGoGYPKshMdKISi6YN3iX3qp3I",
    authDomain: "todolist-app-552d8.firebaseapp.com",
    projectId: "todolist-app-552d8",
    storageBucket: "todolist-app-552d8.appspot.com",
    messagingSenderId: "1077926892842",
    appId: "1:1077926892842:web:5f91bf9570208a40acfa53"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
