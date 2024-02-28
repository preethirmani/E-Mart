import React from 'react'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { Button } from 'react-bootstrap';



const Cart = ({token}) => {
  
  
  const params = useParams();
  const dispatch = useDispatch();
  const productId = params.id;
  console.log('Product Id: ', productId);

  //To get the qunantity from the url
  const quantity = +location.search.split('=')[1];
  console.log(quantity, typeof quantity);

  //to get the date in year-mm-dd 
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1; 
  const day = today.getDate();
  const date = `${year}-${month}-${day}`;
  console.log('date:', date);

  const cartItem = {
    userId : 1,
    date,
    products:[
      {productId , quantity }
    ]
  };

  const cartItems = useSelector(state => state.cart.cart);

  console.log('cartItems',cartItems, cartItems.length);

 
  const addToCartHandler = () => {
     dispatch(addToCart(cartItem));
  }


  return (
    <div>Cart
      <Button onClick={addToCartHandler}
      >AddToCart</Button>
    </div>
  )
}

export default Cart