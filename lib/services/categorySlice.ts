import { Product } from "@/types/Products/products";
import { apiSlice } from "../baseApi";

export const categoryApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCategory: builder.query<Product[], void>({
            query: () => '/categories',
            providesTags: ['Category'],
        }),

    }),
    overrideExisting: false,
});


export const { useGetCategoryQuery } = categoryApi;