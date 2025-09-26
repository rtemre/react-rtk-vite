import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Product } from "./types";

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/products" }),
  endpoints: (build) => ({
    getProducts: build.query<Product[], void>({
      query: () => "/",
    }),
    getProductById: build.query<Product, number>({
      query: (id) => `/${id}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductsQuery, useGetProductByIdQuery } = productApi;
