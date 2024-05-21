import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../config/env.config";

export const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/admin`,
    prepareHeaders: (headers, { getState }) => {
      const { token } = getState().auth;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
        return headers;
      }
    },
  }),
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (body) => ({ body, url: "users", method: "POST" }),
    }),
    deleteUser: builder.mutation({
      query: (id) => ({ url: `users/${id}`, method: "DELETE" }),
    }),
    getSingleUser: builder.query({
      query: (id) => ({ url: `users/${id}`, method: "GET" }),
    }),
    getAllUsers: builder.query({
      query: () => ({ url: `users`, method: "GET" }),
    }),
    updateUser: builder.mutation({
      query: (id) => ({ url: `users/${id}`, method: "PUT" }),
    }),
  }),
});

export const {
  useCreateUserMutation,
  useDeleteUserMutation,
  useGetAllUsersQuery,
  useGetSingleUserQuery,
  useUpdateUserMutation,
} = adminApi;
