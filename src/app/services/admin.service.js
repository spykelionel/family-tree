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
  tagTypes: ["Member"],
  endpoints: (builder) => ({
    createMember: builder.mutation({
      query: (body) => ({ body, url: "create", method: "POST" }),
      invalidatesTags: [{ type: "Member", id: "LIST" }],
      providesTags: [{ type: "Member", id: "LIST" }],
    }),
    deleteMember: builder.mutation({
      query: (id) => ({ url: `delete/${id}`, method: "DELETE" }),
      invalidatesTags: [{ type: "Member", id: "LIST" }],
      providesTags: [{ type: "Member", id: "LIST" }],
    }),
    getSingleMember: builder.query({
      query: (id) => ({ url: `${id}`, method: "GET" }),
    }),
    getAllMembers: builder.query({
      query: () => ({ url: ``, method: "GET" }),
      providesTags: [{ type: "Member", id: "LIST" }],
    }),
    getStatistics: builder.query({
      query: () => ({ url: `stats`, method: "GET" }),
      invalidatesTags: [{ type: "Member", id: "LIST" }],
      providesTags: [{ type: "Member", id: "LIST" }],
    }),
    updateMember: builder.mutation({
      query: ({ id, body }) => ({ url: `update/${id}`, method: "PUT", body }),
      invalidatesTags: [{ type: "Member", id: "LIST" }],
      providesTags: [{ type: "Member", id: "LIST" }],
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
