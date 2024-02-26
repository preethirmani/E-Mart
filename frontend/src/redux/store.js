import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './apiSlice'; 
import cartSlice from './cartSlice';



export const store =  configureStore ({
   reducer : {
    [apiSlice.reducerPath] : apiSlice.reducer,
    cart : cartSlice
   },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
   
});

export default store;


