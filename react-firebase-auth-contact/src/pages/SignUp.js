import React, { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { auth } from "../firebase/firebaseConfig";
import googleIcon from "../assets/Google__G__Logo.svg.png";



const SignUp = () => {
  const contact = useSelector((state) => {
    return state.AuthReducer.contacts;
  });
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailMsg, setEmailMsg] = useState("");
  const [passwordMsg, setPasswordMsg] = useState("");

  useEffect(() => {
    if (contact) {
      navigate("/");
    }
  }, [contact, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailMsg("");
    setPasswordMsg("");
    if (!email) {
      setEmailMsg("Your email should contain '@'");
    }
    if (!password) {
      setPasswordMsg("Password is required");
    } else if (!password) {
      setPasswordMsg("Password should be at least 8 characters");
    }
    try {
      createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
    }

    setEmail("");
    setPassword("");
  };

  const authenticateWithGoogle = async (e) => {
    e.preventDefault();
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (error) {
    }
  };

  return (
    <div className="signup-container">
      <form className="form">
        <h2>Create an Account</h2>
        <input
          type="email"
          placeholder="example@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="alert">{emailMsg ? <p>{emailMsg}</p> : ""}</div>
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="alert">{passwordMsg ? <p>{passwordMsg}</p> : ""}</div>
        <div className="btn">
          <button type="submit" onClick={handleSubmit}>
            Create Account
          </button>
          <button type="submit" onClick={authenticateWithGoogle}>
            <img src={googleIcon} alt="" />
            Sign in with Google
          </button>
        </div>
        <h6>
          Already have an account? <Link to="/login">Login</Link>
        </h6>
      </form>
    </div>
  );
}

export default SignUp;
