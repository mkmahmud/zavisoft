import { apiSlice } from "../baseApi";


export interface User {
    id: number;
    name: string;
}

export const userApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query<User[], void>({
            query: () => '/users',
            providesTags: ['User'],
        }),

    }),
    overrideExisting: false,
});


export const { useGetUsersQuery } = userApi;