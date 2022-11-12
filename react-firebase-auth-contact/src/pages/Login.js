import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebaseConfig";
import googleIcon from "../assets/Google__G__Logo.svg.png";

import { useSelector } from "react-redux";

const Login = () =>{
  const navigate = useNavigate();
  const contact = useSelector((state) => {
    return state.AuthReducer.contacts;
  });
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
      signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error.message);
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
    <div className="login-container">
      <form className="form">
        <h2>Login</h2>
        <div className="input-container">
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
        </div>
        
        <div className="btn">
          <button type="submit" onClick={handleSubmit}>
            Login
          </button>
          <button type="submit" onClick={authenticateWithGoogle}>
            <img src={googleIcon} alt="" />
            Sign in with Google
          </button>
        </div>
        <h6>
          Don't have an account? Sign-up <Link to="/signup">Here</Link>
        </h6>
      </form>
    </div>
  );
}

export default Login;
