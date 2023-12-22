import { configureStore } from "@reduxjs/toolkit";
import todo from "./Slice/todoSlice";

export const store = configureStore({
  reducer: {
    todo,
  },
});
