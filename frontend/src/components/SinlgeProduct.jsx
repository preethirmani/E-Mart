import React from 'react'
import { useParams } from 'react-router'
import { useGetSingleProductQuery } from '../redux/apiSlice';
import Rating from './Rating';
import {Container ,Row, Col, Image, Button, ListGroup, Form, ListGroupItem} from 'react-bootstrap'
import '../index.css'

const SinlgeProduct = ( {token} ) => {
  const productId = useParams();
  console.log('productId',productId)
  console.log('token', token);

  const { data, error, isLoading} = useGetSingleProductQuery(productId.id);
  console.log('singleProductData', data);

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
                        <Form.Control as='input' className='qty-input'>

                        </Form.Control>
                      
                      </ListGroupItem>
                      <ListGroupItem>
                          <Button>
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