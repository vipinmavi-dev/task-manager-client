import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/auth.ts";
import taskReducer from "./task/task.ts";

const store = configureStore({
  reducer: {
    User: authReducer,
    Tasks: taskReducer,
  },
});

export default store;