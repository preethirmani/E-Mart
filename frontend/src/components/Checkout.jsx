

import React, { useEffect, useState } from "react";
import { Row, Col, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import '../index.css';

const Checkout = () => {

   
   useEffect(() => {
    localStorage.clear();
   },[])

  
  return(
  
  <div className="checkout-div">
  
      <h4>Checked Out Successfully!</h4>
   
  </div>
  )
}

export default Checkout;
