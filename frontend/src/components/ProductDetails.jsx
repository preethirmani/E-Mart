import React from 'react'
import { useParams } from 'react-router'
import { useGetSingleProductQuery } from '../redux/apiSlice';
import {Row, Col, Image, Card, Button, ListGroup, Form} from 'react-bootstrap'

const ProductDetails = () => {
  const productId = useParams();
  console.log('productId',productId)

  const { data, error, isLoading} = useGetSingleProductQuery(productId.id);
  console.log('singleProductData', data)

  return (
    <div>ProductDetails</div>
  )
}

export default ProductDetails