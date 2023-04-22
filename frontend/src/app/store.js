import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/userSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
