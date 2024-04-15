import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoslice";
const appstore = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
export default appstore;
