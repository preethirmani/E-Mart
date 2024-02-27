import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name : 'cart',
  initialState : {
    cartItems : []
  },
  reducers : {

    addToCart(state, action ) {
     const item = action.payload;
     console.log(item);
    }
  }
})

export default cartSlice.reducer;
export const {addToCart} = cartSlice.actions;

