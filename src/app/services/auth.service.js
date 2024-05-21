import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../config/env.config";
import { postDelegate } from "../../util/util";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const { token } = getState().auth;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
        return headers;
      }
    },
  }),
  endpoints: (builder) => ({
    logoutUser: builder.mutation({
      query: () => ({ url: "/logout", method: "POST" }),
    }),
    loginUser: builder.mutation({
      query: (body) => postDelegate("/login", body),
    }),
    registerUser: builder.mutation({
      query: (body) => postDelegate("/register", body),
    }),
    resetPassword: builder.mutation({
      query: (body) => postDelegate("/reset-password", body),
    }),
    forgotPassword: builder.mutation({
      query: (body) => postDelegate("/forgot-password", body),
    }),
  }),
});

export const {
  useLoginUserMutation,
  useLogoutUserMutation,
  useRegisterUserMutation,
  useResetPasswordMutation,
  useForgotPasswordMutation,
} = authApi;
