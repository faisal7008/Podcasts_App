import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api_url = `${process.env.REACT_APP_API_URL}`;

// Fetch podcasts
export const getAllPodcasts = createAsyncThunk(
  "podcasts/getAllPodcasts",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(api_url + "/podcasts", config);
      return response.data;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Add podcast
export const addPodcast = createAsyncThunk(
  "podcasts/addPodcast",
  async (podcast, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.post(api_url + "/podcasts", podcast, config);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const podcastsSlice = createSlice({
  name: "podcasts",
  initialState: {
    podcasts: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Fetch podcasts
    builder.addCase(getAllPodcasts.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(getAllPodcasts.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.podcasts = action.payload;
    });
    builder.addCase(getAllPodcasts.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload
        ? action.payload.message
        : action.error.message;
    });

    // Add podcast
    builder.addCase(addPodcast.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(addPodcast.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.podcasts.push(action.payload);
    });
    builder.addCase(addPodcast.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload
        ? action.payload.message
        : action.error.message;
    });
  },
});

export default podcastsSlice.reducer;
