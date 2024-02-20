// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = 'https://fakestoreapi.com/';

export const apiSlice = createApi({
  reducerPath : 'apiSlice',
  baseQuery : fetchBaseQuery({baseUrl}),
  endpoints : (builder) => ({
    getAllProducts : builder.query({
      query : () => `products`,
    }),
    getSingleProduct : builder.query({
      query : (id) => `products/${id}`
    }), 


  }), 
})

export const { useGetAllProductsQuery, useGetSingleProductQuery } = apiSlice;