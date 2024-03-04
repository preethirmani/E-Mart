import { createSlice, current, original, unwrapResult } from "@reduxjs/toolkit";

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
    },
    removeFromCart : (state, action) => {
      
      state.cart = state.cart.filter(item => item.productId != action.payload)

      
    },
   
    reduceQuantity : (state, action) => {
      const pdttoBeUpdated = action.payload;
      const itemIndex = state.cart.findIndex(item => item.productId === pdttoBeUpdated.productId);
       
      
      if(state.cart[itemIndex].quantity === 0) {
        state.cart = state.cart.filter(item => item.productId != state.cart[itemIndex].productId);
      } 
         state.cart[itemIndex].quantity -= pdttoBeUpdated.quantity;
      

    }

  }
})

export default cartSlice.reducer;
export const {addToCart, removeFromCart, reduceQuantity} = cartSlice.actions;



    
