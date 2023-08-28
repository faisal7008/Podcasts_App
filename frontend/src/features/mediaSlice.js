import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mediaUrl: null,
  type: null,
};

const mediaSlice = createSlice({
  name: 'media',
  initialState,
  reducers: {
    setMediaUrl(state, action) {
      state.mediaUrl = action.payload.path;
      state.type = action.payload.type;
    },
    reset(state, action) {
      state.mediaUrl = null;
      state.type = null;
    },
  },
});

export const { setMediaUrl, reset } = mediaSlice.actions;

export default mediaSlice.reducer;
