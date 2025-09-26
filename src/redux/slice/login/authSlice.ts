import { createSlice } from "@reduxjs/toolkit";
import { loginApi } from "./loginApi";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user: null as null | { username: string },
  },
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
  extraReducers(builder) {
    builder.addMatcher(
      loginApi.endpoints.login.matchFulfilled,
      (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
      }
    );
  },
});

export const { logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
