import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/userSlice';
import podcastReducer from '../features/podcastSlice';
import episodeReducer from '../features/episodeSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    podcasts: podcastReducer,
    episodes: episodeReducer,
  },
});
