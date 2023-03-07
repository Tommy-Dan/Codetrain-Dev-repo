import React, { useState } from 'react';
import '../../App.css';
import './Auth.css';
import Logo from '../../img/booklogo.png'



const Signup = () => {
  const [username, setUsername] = useState("");
  const[email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [register, setRegister] = useState(false);
  return (
    <>
     <div className='Auth'>
       <div className='a-left'>
         <img src={Logo} alt='book image' />
         <div className='webname'>
            <h1>CODERS BookStore</h1>
            <h6>Your favorites place to explore as bookworm</h6>
         </div>
       </div>
     </div>
     <div className='a-right'>
        <form className='infoForm authForm'>
            <h3>Sign up</h3>
            <div>
              <input type="text" 
                name='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='Enter username' 
                className='infoInput' 
              />
            </div>
            <div>
              <input 
                type="email" 
                name='email' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter email' 
                className='infoInput' 
              />
            </div>
            <div>
              <input 
                 type="password" 
                 name='password' 
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 placeholder='Password' 
                 className='infoInput' 
              />
              <input 
                 type="password" 
                 name='password'
                 value={cpassword}
                 onChange={(e) => setCpassword(e.target.value)}
                 placeholder='Confirm Password' 
                 className='infoInput' 
              />
            </div>
            <div>
               <span className='spanfont'>Already have an account! Login</span>
            </div>
            <button className='button infoButton' type='submit'>Signup</button>
        </form>
      </div>
    </> 
  )
};

export default Signup;