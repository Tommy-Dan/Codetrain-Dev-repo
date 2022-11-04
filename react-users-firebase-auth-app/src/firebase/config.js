// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyD-3ORoHXJS4KWe_3M5UaraM7zdZwrYCRU",
  	authDomain: "userscontact-b7626.firebaseapp.com",
  	projectId: "userscontact-b7626",
  	storageBucket: "userscontact-b7626.appspot.com",
  	messagingSenderId: "692833524680",
  	appId: "1:692833524680:web:fca8b8aa5a090505bb3efd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
