import React from "react";
import { Row, Col, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import '../index.css';

const Checkout = ({products}) => {

  const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [] ;
  let cartDetails = [];
  
  console.log('Checkout Page: Cart', cart);
  console.log('products From cart at Checkout Page', products);



   cart.forEach(element => {
        const item = products.find(product => product.id == element.productId);
        
        const newItem = {
          ...item,
          quantity : element.quantity
        }
        cartDetails.push(newItem);
       });

    console.log('CartDetails:', cartDetails)
    const subTotal = cartDetails.length > 0 ? Number(cartDetails.reduce((acc, cur) => acc + cur.quantity * cur.price, 0)).toFixed(2) : +(0.00);
    const tax = subTotal ? (0.04 * subTotal).toFixed(2) : Number(0.00) ;
    const total = (Number(subTotal) + Number(tax) + 3).toFixed(2) ;

    function paymentHandler() {

    }

  
  return(
  <div className="checkout-div">
    <h3> CheckOut </h3>
    <Row>
      <Col>
      <ListGroup variant="flush">
        <ListGroupItem>
         <Row>
          <Col>Subtotal</Col>
          <Col>$ {subTotal} </Col>
         </Row>
        </ListGroupItem>
        <ListGroupItem>
          <Row>
            <Col>Shipping</Col>
            <Col>$3.00</Col>
          </Row>
        </ListGroupItem>
        <ListGroupItem>
          <Row>
            <Col>Estimated Tax</Col>
             <Col>${tax}</Col>
          </Row>
        </ListGroupItem>
        <ListGroupItem>
          <Row>
            <Col>Total</Col>
            <Col>${total}</Col>
          </Row>
        </ListGroupItem>
      </ListGroup>
      </Col>
      <Col md={6} className="checkout-Column">
            <ListGroup variant="flush">
              <ListGroupItem>
                <h4>Shipping</h4>
                <Form>
                
                  <Form.Control column sm="2" type="text"  placeholder="Enter Name">
                  </Form.Control>
                  
                  <div >
                    <div className="row checkout-row-div">
                        <div className="col">
                          <Form.Control  type="text" className="address-ctrl"
                          placeholder=" house/apt number,street">
                          </Form.Control>
                        </div>
                        <div className="col">
                          <Form.Control  type="text" className="city-ctrl" placeholder="city">
                          </Form.Control>
                        </div>
                      </div>
                      <div className="row checkout-row-div">
                        <div className="col  ">
                          <Form.Control  type="text" className="state-ctrl" placeholder="state">
                          </Form.Control>
                        </div>
                        <div className="col">
                          <Form.Control  type="text" className="zipcode-ctrl" placeholder="zipcode">
                          </Form.Control>
                        </div>
                      </div> 
                  </div>
             
                <h4>Payment</h4>
                  <div>
                    <div className="row">
                      <div className="col">
                        <Form.Control 
                         placeholder="Enter card number">
                        </Form.Control>
                      </div>
                      <div className="col">
                        <Form.Control 
                         type="date" placeholder="Expiration date (MM/YY)">
                        </Form.Control>
                      </div>
                      <div className="col">
                        <Form.Control column sm="2"
                        type="text" placeholder="Security Code">
                        </Form.Control>
                      </div>
                      <div className="row checkout-row-div">
                        <div className="col">
                          <Form.Control column sm="2"
                           type="text" placeholder="Name on card">
                         </Form.Control>
                        </div>
                        <div className="col">
                           <Form.Control column sm="2"
                            type="text" placeholder="Nickname (optional)">
                            </Form.Control>

                        </div>
                      </div>
                    </div>
                  </div>  
                  <Button className="payment-Btn">PayNow</Button>
                 
                </Form>
              </ListGroupItem>
            </ListGroup>
      </Col>
      
    </Row>
  </div>
  )
}

export default Checkout;