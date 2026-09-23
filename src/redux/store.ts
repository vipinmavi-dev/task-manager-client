import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/auth.ts";

const store = configureStore({
  reducer: {
    User: authReducer,
  },
});

export default store;