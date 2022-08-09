import React from 'react';
import { useParams } from "react-router-dom";

function ServiceDetails() {
    const { id } = useParams();
  return (
    <div>
	    <h1>Our service {id} </h1>
	    <p>This displaying service details</p>
	</div>
    
  )
}

export default ServiceDetails;