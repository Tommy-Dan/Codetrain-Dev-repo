import React from 'react';



const Login = () => {
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
              <h3>Log In</h3>
              <div>
                  <input 
                      type="text"
                      placeholder="Username"
                      name="username"
                      className="infoInput"
                  />
              </div>
              <div>
                  <input 
                      type="password"
                      placeholder="Password"
                      name="password"
                      className="infoInput"
                  />
              </div>
              <div>
                  <span className='spanfont'>Don't have an account! Register</span>
              </div>
              <button className='button infoButton' type='submit'>Login</button>
          </form>
        </div>
    </>
  )
}

export default Login