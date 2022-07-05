import React from 'react';
import logo from './images/react-js-logo.jpeg';

const Image = (props) => { 
    return(
        <div className='react-img'>
            <img src={logo} alt='react logo' />
            <h3>{props.name}</h3>
        </div>
    );
  }
  export default Image;