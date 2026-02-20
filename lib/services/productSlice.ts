import { Product } from "@/types/Products/products";
import { apiSlice } from "../baseApi";

export const productApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // Get All Products
        getProducts: builder.query<Product[], void>({
            query: () => '/products',
            providesTags: ['Product'],
        }),
        // Get Single Product
        getProductById: builder.query<Product, string>({
            query: (id) => `/products/${id}`,
            providesTags: ['Product'],
        }),

    }),
    overrideExisting: false,
});


export const { useGetProductsQuery, useGetProductByIdQuery } = productApi;