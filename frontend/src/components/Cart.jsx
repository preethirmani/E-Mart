import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Row,Button, Col, Card, ListGroup, Image, ListGroupItem } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart, reduceQuantity } from '../redux/cartSlice';
import '../index.css';




const Cart = ({token, products}) => {

  const cart= useSelector(state => state.cart.cart);
  const dispatch = useDispatch();
  const [qty, setQty] = useState(0);
  
  let cartDetails = [];



  useEffect(() => {
   

  },[cart ])

   
    
        cart.forEach(element => {
        const item = products.find(product => product.id == element.productId);
        const newItem = {
          ...item,
          quantity : element.quantity
        }
        cartDetails.push(newItem);
       });


  const removeFromCartHandler = (id) => {
  
    dispatch(removeFromCart(id));
  }

 
  const addQuantity = (e, id) => {
   
    dispatch(addToCart({
      productId : id,
      quantity : 1
    }));
  }
  const subtractQuantity = (id) => {
 
    dispatch(reduceQuantity({
      productId : id,
      quantity : 1
    }));
  }

  console.log('cartItems', cartDetails);



  return (
   
      <Row className='cart-row'>
       
        <Col className='cart-col' md={8} >
          <Card>
             <h4>Shopping Cart</h4>
             {
              cartDetails.length <= 0 
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
                            <Col >
                              {product.title}    
                              <Row >
                                ${product.price}
                              </Row>
                              <Row >
                                <Col md={3}>
                                 <div className='updateCart-div'>
                                  <Button variant='light' 
                                  onClick={(e) => addQuantity(e, product.id)}>
                                    <strong>+</strong></Button>
                                  <label>{product.quantity}</label>
                                  <Button variant='light'
                                  onClick={(e) => subtractQuantity(product.id)}
                                  disabled={product.quantity <= 0}><strong>-</strong></Button>
                                 </div>
                                 </Col>
                              </Row>
                            </Col>
                            <Col md={2}>
                              <Link className='cart-link' onClick={(e) => removeFromCartHandler(product.id)}>Remove</Link>
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
          {
            cartDetails.length > 0 && (
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
                    <Button size='sm' className='checkout-btn' variant='warning'>Proceed to CheckOut</Button>
                  </ListGroupItem>
                </ListGroup>     
              </Card>
            )
          }  
        
           
          
        </Col>
      </Row>
  )
}

export default Cart