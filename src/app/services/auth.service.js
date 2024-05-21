import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../lib/config/config.env";
import { FormWizard } from "../../lib/util/util";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/auth`,
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
      query: (body) => FormWizard.post("/login", body),
    }),
    registerUser: builder.mutation({
      query: (body) => FormWizard.post("/create", body),
    }),
    resetPassword: builder.mutation({
      query: (body) => FormWizard.post("/reset-password", body),
    }),
    forgotPassword: builder.mutation({
      query: (body) => FormWizard.post("/forgot-password", body),
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
