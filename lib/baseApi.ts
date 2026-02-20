import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.escuelajs.co/api/v1',
        prepareHeaders: (headers) => {

            return headers;
        },
    }),
    // Tags 
    tagTypes: ['Product', "Category"],

    endpoints: () => ({}),
});