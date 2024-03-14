import React from "react";
import { Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
const Checkout = () => {

  const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [] ;
  console.log('products From cart at Checkout Page', cart);
  return(
  <>
  
  <h3> CheckOut </h3>
  <Row>
    <Col md={8}>
      <ListGroup variant="flush">
        <ListGroupItem>
          <h4>Shipping</h4>
          <Form>
            <Form.Label column sm="2">
               Name
            </Form.Label>
            <Form.Control column sm="2"
            type="text" >
            </Form.Control>
            <Form.Label column sm="2">
               Address1 
            </Form.Label>
            <Form.Control column sm="2"
            type="text" 
            placeholder=" house/apt number,street"
            >
            </Form.Control>

             <Form.Label column sm="2">
               City 
            </Form.Label>
            <Form.Control column sm="2"
            type="text" 
            >
            </Form.Control>
             <Form.Label column sm="2">
               State 
            </Form.Label>
            <Form.Control column sm="2"
            type="text" 
            >
            </Form.Control>

            <Form.Label column sm="2">
               ZipCode 
            </Form.Label>
            <Form.Control column sm="2"
            type="text" 
            >
            </Form.Control>
            

          </Form>

        </ListGroupItem>
         <ListGroupItem>
          <h4>Payment</h4>
            <Form.Control column sm="2"
            type="number" placeholder="Enter card number">
            </Form.Control>
            <Form.Label></Form.Label>
            <Form.Control column sm="2"
            type="text" placeholder="Expiration date (MM/YY)">
            </Form.Control>
             <Form.Control column sm="2"
            type="text" placeholder="Security Code">
            </Form.Control>
            <Form.Control column sm="2"
            type="text" placeholder="Name on card">
            </Form.Control>
            <Form.Control column sm="2"
            type="text" placeholder="Nickname (optional)">
            </Form.Control>
        </ListGroupItem>

      </ListGroup>
    </Col>
  </Row>
  </>
  )
}

export default Checkout;