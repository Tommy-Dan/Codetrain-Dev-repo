import React,{ Link } from "react-router-dom";
import "../App.css";






const Home = () => {
  return (
    <>
      <div className="header">
                <div className="row1">
                    <h1>A room without books is like<br/> a body without a soul.</h1>
                </div>
                <div className="row2">
                    <h2>Login To Find Your Book</h2>
                    <button className="hLogin button"> 
                       <Link to={"./login"}>Login</Link>
                    </button>
                </div>
            </div>
    </>
  ) 
};

export default Home;
