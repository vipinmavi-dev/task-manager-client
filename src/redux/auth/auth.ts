import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    name: "",
    email: "",
    phone: "",
    photo: "",
    auth_type_id: 0,
  },
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
      state.data = {
        name: "",
        email: "",
        phone: "",
        photo: "",
        auth_type_id: 0,
      };
      state.isAuthenticated = false;
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
