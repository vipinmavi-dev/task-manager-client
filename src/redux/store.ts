import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/auth.ts";
import taskReducer from "./task/task.ts";
import statusReducer from "./status/status.redux.ts";

const store = configureStore({
  reducer: {
    User: authReducer,
    Tasks: taskReducer,
    Status: statusReducer
  },
});

export default store;