import { createSlice, current, original, unwrapResult } from "@reduxjs/toolkit";


//const products = JSON.parse(localStorage.getItem('cart')) 


const cartSlice = createSlice({
  name : 'cart',
  initialState : {
    cart : []
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

     // console.log('state.cart', JSON.stringify(state.cart));
      localStorage.setItem('cart', state.cart.map(item => JSON.stringify(item)));
    
    },
    removeFromCart : (state, action) => {
      
      state.cart = state.cart.filter(item => item.productId != action.payload);
      //localStorage.setItem('cart', state.cart);

      
    },
   
    reduceQuantity : (state, action) => {
      const pdttoBeUpdated = action.payload;
      const itemIndex = state.cart.findIndex(item => item.productId === pdttoBeUpdated.productId);
       
      
      if(state.cart[itemIndex].quantity === 0) {
        state.cart = state.cart.filter(item => item.productId != state.cart[itemIndex].productId);
      } 
         state.cart[itemIndex].quantity -= pdttoBeUpdated.quantity;
         //localStorage.setItem('cart', state.cart);
      

    }

  }
})

export default cartSlice.reducer;
export const {addToCart, removeFromCart, reduceQuantity} = cartSlice.actions;



    
