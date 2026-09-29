import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/auth.ts";
import taskReducer from "./task/task.ts";
import statusReducer from "./status/status.redux.ts";
import priorityReducer from "./priority/priority.redux.ts";

const store = configureStore({
  reducer: {
    User: authReducer,
    Tasks: taskReducer,
    Status: statusReducer,
    Priority: priorityReducer,
  },
});

export default store;