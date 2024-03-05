import { createSlice, current, original, unwrapResult } from "@reduxjs/toolkit";


const products = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [] ;
console.log('products', products);




const cartSlice = createSlice({
  name : 'cart',
  initialState : {
    cart : products
  } ,
  reducers : {
    addToCart : (state, action) => {
      const pdtToBeAdded = action.payload;
      const existsIndex = state.cart.findIndex((product) =>  product.productId === pdtToBeAdded.productId  );
      if(existsIndex !== -1) {
        state.cart[existsIndex].quantity += pdtToBeAdded.quantity;      
      } else {
        state.cart.push(action.payload); 
      }

      localStorage.setItem('cart', JSON.stringify(state.cart));
     
    
    },
    removeFromCart : (state, action) => {
      
      state.cart = state.cart.filter(item => item.productId != action.payload);
      localStorage.setItem('cart', JSON.stringify(state.cart));

      
    },
   
    reduceQuantity : (state, action) => {
      const pdttoBeUpdated = action.payload;
      const itemIndex = state.cart.findIndex(item => item.productId === pdttoBeUpdated.productId);
       
      
      if(state.cart[itemIndex].quantity === 0) {
        state.cart = state.cart.filter(item => item.productId != state.cart[itemIndex].productId);
      } 
         state.cart[itemIndex].quantity -= pdttoBeUpdated.quantity;
         localStorage.setItem('cart', JSON.stringify(state.cart));
      

    }

  }
})

export default cartSlice.reducer;
export const {addToCart, removeFromCart, reduceQuantity} = cartSlice.actions;



    
