import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import { useGetAllProductsQuery } from "../redux/apiSlice";
import Rating from "./Rating";

import '../index.css';
import { Link } from "react-router-dom";
const Home = ({token, setProducts}) => {
 
  const { data, error, isLoading } = useGetAllProductsQuery();
  setProducts(data);
  
   
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortOption, setSortoption] = useState('');
  let filteredProducts = data ? data : [];
  
  
  

   const categories = data ? Array.from(
    new Set(data.map(d => d.category))
   ) : null;
   
   
    filteredProducts = checkFilter();
   
   function checkFilter() {
      if((selectedCategory && selectedCategory != 'Select a category') && (sortOption  && sortOption != 'Sort')) {
        return sortProducts().filter(d => d.category === selectedCategory);
      } else if(selectedCategory && selectedCategory != 'Select a category') {
        return data.filter(d => d.category === selectedCategory);
      } else if(sortOption && sortOption != 'Sort') {
        return sortProducts();
      } else {
        return data;
      }
   }

  
  function sortProducts() {
    console.log('sortProducts called!');
    console.log('SortOptions', sortOption);

    if(sortOption === 'Price low - high') {
      const newProducts = filteredProducts ? filteredProducts.slice() : data.slice();
      newProducts.sort((p1, p2) => {
        if(p1.price < p2.price)
          return -1
      });
      return newProducts;
    } else if(sortOption === 'Rating') {
     const newProducts = filteredProducts ? filteredProducts.slice() : data.slice();
      newProducts.sort((p1, p2) => {
        if(p2.rating.rate < p1.rating.rate)
          return -1;
      });
      return newProducts;
    } else if(sortOption === 'Ascending') {
     const newProducts = filteredProducts ? filteredProducts.slice() : data.slice();
      newProducts.sort((p1, p2) => {
        if(p1.title.toLowerCase() < p2.title.toLowerCase())
          return -1
      });
      return newProducts;
    } else if(sortOption === 'Descending') {
      console.log('Inside DEscending...');
     const newProducts = filteredProducts ? filteredProducts.slice() : data.slice();
      newProducts.sort((p1, p2) => {
        if(p2.title.toLowerCase() < p1.title.toLowerCase())
          return -1;
      } )
      return newProducts;

    } else {
      return data; 
    }
    
  }
    


useEffect(() => {
  
},[sortOption])
  
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
  <div >
    {
     
      data && ( 
        <>
         <div className="form-container">
          <Form.Select className="form-select"
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)}>
                <option>Select a category</option>
              {
                categories.map((category,i) => {
                  return <option key={i}>{category}</option>
                })
              }
          </Form.Select>
           <Form.Select className="form-select" 
           value={sortOption} 
           onChange={(e) => setSortoption(e.target.value)}>

                <option>Sort</option>
                <option>Price low - high</option>
                <option> Rating  </option>
                <option> Ascending </option>
                <option> Descending </option>
             
          </Form.Select>
          </div>
          <div className="product-container">
          {
              filteredProducts.map(product => {
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
          </div>
        </>
      )
    }
  </div>
  )
}

export default Home;