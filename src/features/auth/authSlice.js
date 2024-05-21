import { createSlice } from "@reduxjs/toolkit";
import { LocalStorage } from "../../util/localstorage";

const initialState = {
  user: LocalStorage.load("user"),
  token: LocalStorage.load("token"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, { payload }) => {
      const { user, token } = payload;
      state.user = user;
      state.token = token;
      const isUserSaved = LocalStorage.save("user", user);
      const isTokenSaved = LocalStorage.save("token", token);

      if (isUserSaved && isTokenSaved) {
        console.log("User and Token saved successfully.");
      }
    },
    logout: (state) => {
      const isLoggedOut = LocalStorage.remove("token");
      const isUserRemoved = LocalStorage.remove("user");
      if (isLoggedOut && isUserRemoved) {
        state.user = null;
        state.token = null;
        console.log("User has been successfully logged out.");
      }
    },
  },
});

export const { logout, setCredentials } = authSlice.actions;
export default authSlice.reducer;
