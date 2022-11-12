import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyD-3ORoHXJS4KWe_3M5UaraM7zdZwrYCRU",
    authDomain: "userscontact-b7626.firebaseapp.com",
    projectId: "userscontact-b7626",
    storageBucket: "userscontact-b7626.appspot.com",
    messagingSenderId: "692833524680",
    appId: "1:692833524680:web:fca8b8aa5a090505bb3efd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db };
