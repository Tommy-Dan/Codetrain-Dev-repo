import React from 'react';
import Logo from "../../img/booklogo.png";
import {UilSearch} from '@iconscout/react-unicons';
import './LogoSearch.css';



const LogoSearch = () => {
  return (
    <div className="LogoSearch">
      <img src={Logo} alt="" className='b-logo'/>
      <div className="Search">
          <input type="text" placeholder="Search"/>
          <div className="s-icon">
                <UilSearch/>
          </div>
      </div>
    </div>
  )
}

export default LogoSearch;