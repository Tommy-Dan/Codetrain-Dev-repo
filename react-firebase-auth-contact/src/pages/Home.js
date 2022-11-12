import React from "react";
import AddContactForm from "../components/AddContactForm";
import AllContacts from "../components/AllContacts";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

function Home() {
  return (
    <div className="container">
      <div className="sign-out">
        <button onClick={() => signOut(auth)} className="signOut">
          Sign Out
        </button>
      </div>
      <div className="row mt-5">
        <div className="col-md-6">
          <AddContactForm />
        </div>
        <div className="col-md-6">
          <AllContacts />
        </div>
      </div>
    </div>
  );
}

export default Home;
