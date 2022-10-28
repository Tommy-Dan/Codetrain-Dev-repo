// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPgiuhws7Z3tU3YwRep3_odNTYNl9DAbs",
  authDomain: "todo-app-a44a5.firebaseapp.com",
  projectId: "todo-app-a44a5",
  storageBucket: "todo-app-a44a5.appspot.com",
  messagingSenderId: "106520708953",
  appId: "1:106520708953:web:e6302c85bf993fc0e62e48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


