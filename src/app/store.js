import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import { adminApi } from "./services/admin.service";
import { authApi } from "./services/auth.service";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [adminApi.reducerPath]: adminApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(adminApi.middleware)
      .concat(authApi.middleware),
});
