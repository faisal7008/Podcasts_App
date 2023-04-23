import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/userSlice";
import podcastReducer from "../features/podcastSlice";
import mediaReducer from "../features/mediaSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    podcasts: podcastReducer,
    media: mediaReducer,
  },
});
