import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import { adminApi } from "./services/admin.service";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [adminApi.reducerPath]: adminApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(adminApi.middleware),
});
