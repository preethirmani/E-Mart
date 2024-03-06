import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const baseUrl = 'https://fakestoreapi.com/';

export const mockApiSlice = createApi({
  reducerPath: 'mockApiSlice',
  baseQuery: fetchBaseQuery({ baseUrl }),
  
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (body) => ({
        url: `users`,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useRegisterMutation: useMockRegisterMutation,
} = mockApiSlice;