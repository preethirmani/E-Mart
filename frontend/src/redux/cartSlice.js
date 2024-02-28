import { createSlice, current, original, unwrapResult } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name : 'cart',
  initialState : {
    cart : []
  } ,
  reducers : {
    addToCart : (state, action) => {
      const pdtToBeAdded = action.payload;
      console.log('pdtToBeAdded', pdtToBeAdded);
  
      const existsIndex = state.cart.findIndex((product) =>  product.productId === pdtToBeAdded.productId  );
      console.log('existItem', existsIndex);

      if(existsIndex !== -1) {
        state.cart[existsIndex].quantity += pdtToBeAdded.quantity;
        
      } else {
        state.cart.push(action.payload);
        console.log('cart after adding',current(state.cart));
      }
    }
  }
})

export default cartSlice.reducer;
export const {addToCart} = cartSlice.actions;



    
