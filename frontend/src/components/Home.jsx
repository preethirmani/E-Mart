import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import { useGetAllProductsQuery } from "../redux/apiSlice";
import Rating from "./Rating";

import '../index.css';
import { Link } from "react-router-dom";
const Home = ({token}) => {
 
  const { data, error, isLoading } = useGetAllProductsQuery();
   
  const [selectedCategory, setSelectedCategory] = useState('');
  

   const categories = data ? Array.from(
    new Set(data.map(d => d.category))
   ) : null;
   console.log('categories', categories);

   const handleSelectChange = (e) => {
   
    const newValue = e.target.value;
    setSelectedCategory(newValue);
    console.log(selectedCategory);
   }
   
   if (isLoading) {
    
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
     
      data && ( 
        <>

          <Form.Select 
              value={selectedCategory} 
              onChange={handleSelectChange}>
                <option>Select a category</option>
              {
                categories.map(category => {
                  return <option>{category}</option>
                })
              }
          </Form.Select>
          {data.map(product => {
            return (
                    <div className="product-card" key={product.id}>
                            <div className="product-img-container">   
                              <Link to={`/product/${product.id}`}>
                                <img className='product-coverimage' src={product.image}/>  
                              </Link> 
                            </div>
                            <div className="product-info">
                              <Link to={`/product/${product.id}`}>
                                  <h6>{product.title}</h6>
                              </Link>
                              <label>${product.price}</label>
                              <br />
                              <div>
                                <Rating 
                                value = {product.rating.rate}
                                text = {`${product.rating.count} reviews`}
                                />
                              </div>
                            </div>
                      </div>
             )
          })}
        </>
      )
    }
  </div>
  )
}

export default Home;