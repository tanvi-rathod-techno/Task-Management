import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./addTask"; // Ensure correct path

const store = configureStore({
  reducer: {
    tasks: taskReducer, 
  },
});

export default store;
