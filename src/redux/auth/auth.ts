import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "mySelf",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.data = action.payload.data;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.data = null;
      state.isAuthenticated = false;
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;