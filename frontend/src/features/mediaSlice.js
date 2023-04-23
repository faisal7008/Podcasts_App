import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mediaUrl: null,
  type: null,
};

const mediaSlice = createSlice({
  name: "media",
  initialState,
  reducers: {
    setMediaUrl(state, action) {
      state.mediaUrl = action.payload.path;
      state.type = action.payload.type;
    },
  },
});

export const { setMediaUrl } = mediaSlice.actions;

export default mediaSlice.reducer;
