import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useGetSingleProductQuery } from '../redux/apiSlice';
import { useDispatch } from 'react-redux';
import Rating from './Rating';
import {Container ,Row, Col, Image, Button, ListGroup, Form, ListGroupItem} from 'react-bootstrap';
import { addToCart } from '../redux/cartSlice';
import '../index.css'

const SinlgeProduct = ( {token} ) => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);
  
  const productId = params.id;
 

  const { data, error, isLoading} = useGetSingleProductQuery(productId);


  const addToCartHandler = () => {
    //Add to cart
   
    let products = ({productId, quantity : +quantity});
    console.log('products.productId ', products)
    

    dispatch(addToCart(products));

    //navigate(`/cart/${productId.id}?qty=${quantity}`);

  }

  return (
        <>
          {
            isLoading ? (
              <div>Loading...</div>
            ) : error ? (
              <div>error</div>
            ) : (
              <Container>
                <Row>
                  <Col md={5}>
                    <Image src={data.image} alt={data.title} fluid/>
                  </Col>
                  <Col md={6}>
                    <ListGroup variant='flush'>
                      <ListGroupItem>
                        <h3>{data.title}</h3>
                      </ListGroupItem>
                      <ListGroupItem>
                        <Rating
                          value={data.rating.rate}
                            text={`${data.rating.count} reviews`}
                        />
                      </ListGroupItem>
                      <ListGroupItem>
                      <strong>Price : </strong> ${data.price}
                      </ListGroupItem>
                      <ListGroupItem>{data.description}</ListGroupItem>  
                      <ListGroupItem>
                        <strong>
                          Quantity
                        </strong>
                        <Form.Control as='input' 
                        className='qty-input' 
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        
                        >

                        </Form.Control>
                      
                      </ListGroupItem>
                      <ListGroupItem>
                          <Button onClick={addToCartHandler}>
                            AddToCart
                          </Button>
                        </ListGroupItem> 
                    </ListGroup>
                  </Col>
                </Row>
              </Container>
            )
          }
        </>
  )
}

export default SinlgeProduct