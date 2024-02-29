import React from 'react'


import { useDispatch, useSelector } from 'react-redux';


import { Row,Button, Col, Card, ListGroup, Image, ListGroupItem } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { addToCart } from '../redux/cartSlice';
import '../index.css';


const Cart = ({token, products}) => {

  const cartItems = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();
  console.log('products', products);
  console.log('cartItems',cartItems, cartItems.length);
  let cartDetails = [];

  cartItems.forEach(element => {
    const item = products.find(product => product.id == element.productId);
    const newItem = {
      ...item,
      quantity : element.quantity
    }
   cartDetails.push(newItem);
  });

  const removeFromCartHandler = (id) => {
    console.log('remove from cartHandler called and id is', id);
  }

  console.log('cartDetails', cartDetails);
  return (
   
      <Row className='cart-row'>
       
        <Col className='cart-col' md={8} >
          <Card>
             <h4>Shopping Cart</h4>
             {
              cartDetails.length === 0 
              ? (<div>Cart is empty</div>)
              : (
                <ListGroup variant='flush'>
                  {
                    cartDetails.map(product => {
                      return(
                        <ListGroupItem key={product.id}>
                          <Row>
                            <Col md={2}>
                             
                                <Image src={product.image} alt={product.name} fluid rounded />
                               
                            </Col>
                            <Col md={3}>
                              {product.title}    
                            </Col>
                            <Col md={3}>
                              ${product.price}
                            </Col>
                            <Col md={2}>
                              <Form.Control as='input'  value={product.quantity}>
                              </Form.Control>
                            </Col>
                            <Col md={2}>
                              <Button>Remove</Button>
                            </Col>
                          </Row>
                        </ListGroupItem>
                        
                      )
                    })
                  }

                </ListGroup>
              )
             }
          </Card>
        
           
          
        </Col>
        <Col className='cart-col' md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroupItem>
                <h5>Sub Total(
                  {
                    cartDetails.reduce((acc, cur) => acc + cur.quantity, 0)
                  } ) :
                 
                

                $ {
                  cartDetails.reduce((acc, cur) => acc + cur.quantity * cur.price, 0).toFixed(2)
                }
                </h5>
              </ListGroupItem>
              <ListGroupItem>
                <Button className='checkout-btn' variant='warning'>Proceed to CheckOut</Button>

              </ListGroupItem>

            </ListGroup>
              
          </Card>
        
           
          
        </Col>
      </Row>
  )
}

export default Cart