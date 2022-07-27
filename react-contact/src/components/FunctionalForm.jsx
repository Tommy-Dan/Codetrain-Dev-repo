import React, { useState } from "react";


function FunctionalForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [info, setInfo] = useState([
        {
            name: "Tom",
            email: "tom@gmail.com",
            password: "tom@12345"
        },
        {
            name: "Seth",
            email: "seth110@gmail.com",
            password: "seth@12345"
        },
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setInfo(
            [...info, {
                name, email, password
            }],
            setName(""),
            setEmail(""),
            setPassword("")
        );
    };

    return(
        <>
        <div className="container">
          <form>
          <div className="form-inner">
                <h1>Login</h1>
                <div className="form-group">
                    <label htmlFor="">Name:</label>
                    <input type="text" name="name" placeholder="Your name" value={name} onChange={ (e) => {setName(e.target.value);}} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Email:</label>
                    <input type="email" name="name" placeholder="Your email" value={email} onChange={ (e) => {setEmail(e.target.value);}} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Password:</label>
                    <input type="password" name="password" placeholder="Password" value={password} onChange={ (e) => {setPassword(e.target.value);}} />
                </div>

                <button onClick={handleSubmit}>Login</button>
            </div>
          </form>

          <div className="display">
            {
                info.map((item, index) => {
                    return(
                        <div key={index} className="b-space">
                            <div className="m-left">
                                <h5>Name: <span>{item.name}</span></h5>
                                <h5>Email: <span>{item.email}</span></h5>
                                <h5>Password: <span>{item.password}</span></h5>
                            </div>
                        </div>
                    );
                })
            }
          </div>
          </div>
        </>
     
    );
}

export default FunctionalForm;