import React from 'react'
// import { Button } from 'react-bootstrap';
import {Link } from 'react-router-dom';

function Contact() {
  return (
    <div>
        <h1 className='p-margin'>Contact Page</h1>
        <p>This page gives contact information</p>

        <Link to="/servicedetails:08976">Service</Link>
        
    </div>
  )
}

export default Contact;