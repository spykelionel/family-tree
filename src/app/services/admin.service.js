import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../lib/config/config.env";

export const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/members`,
    prepareHeaders: (headers, { getState }) => {
      const { token } = getState().auth;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
        return headers;
      }
    },
  }),
  endpoints: (builder) => ({
    createMember: builder.mutation({
      query: (body) => ({ body, url: "create", method: "POST" }),
    }),
    deleteMember: builder.mutation({
      query: (id) => ({ url: `delete/${id}`, method: "DELETE" }),
    }),
    getSingleMember: builder.query({
      query: (id) => ({ url: `${id}`, method: "GET" }),
    }),
    getAllMembers: builder.query({
      query: () => ({ url: ``, method: "GET" }),
    }),
    getStatistics: builder.query({
      query: () => ({ url: `stats`, method: "GET" }),
    }),
    updateMember: builder.mutation({
      query: (id) => ({ url: `update/${id}`, method: "PUT" }),
    }),
  }),
});

export const {
  useCreateMemberMutation,
  useDeleteMemberMutation,
  useGetStatisticsQuery,
  useGetAllMembersQuery,
  useGetSingleMemberQuery,
  useUpdateMemberMutation,
} = adminApi;
