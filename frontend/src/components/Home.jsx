import React, { useState } from "react";
import { useGetAllProductsQuery } from "../redux/apiSlice";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../index.css';
const Home = () => {
 
   const { data, error, isLoading } = useGetAllProductsQuery();
   console.log('data', data ? data : 'lookatloading');

   if (isLoading) {
     console.log('isLoading', isLoading);
    return(
       <div>Loading... Products are loading..</div>
    )
   
   
  }

  // Show an error message if the fetch failed
  if (error) {
    return(
      <div>
        Oops.Sorry..Error Loading the Products...
      </div>

    )
    
  }

  return (
  <div className="product-container">
    {
      data && data.map(product => {
        return (
              <div className="product-card" key={product.id}>
                      <div className="product-img-container">   
                          <img className='product-coverimage' src={product.image}/>   
                      </div>
                      <div className="product-info">
                        <label>{product.title}</label>
                        <br />
                        <label>by {product.rating.rate}</label>
                        <br />
                        <label>${product.price}</label>
                      </div>
                </div>
        )
      })
    
    }
  </div>
  )
}

export default Home;