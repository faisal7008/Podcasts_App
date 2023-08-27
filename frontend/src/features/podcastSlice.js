import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getMe } from "./userSlice";

const api_url = `${process.env.REACT_APP_API_URL}`;

// Fetch podcasts
export const getAllPodcasts = createAsyncThunk(
  "podcasts/getAllPodcasts",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      // const config = {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      // };
      const response = await axios.get(api_url + "/podcasts");
      return response.data;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// upload podcasts
export const uploadPodcast = createAsyncThunk(
  "podcasts/upload",
  async ({ file }, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const type = file.type.split('/')[0]
      // console.log(type)
      formData.append("resource_type", type); // or 'audio' for audio files
      formData.append("upload_preset", "upload_podcasts"); // create an upload preset in your Cloudinary account

      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/upload`,
        formData
      );
      // const data = await response.json();
      console.log(response.data);
      return response.data;
    } catch (error) {
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

// Get podcast by Id
export const getPodcast = createAsyncThunk(
  "podcasts/getPodcast",
  async (podcastId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(api_url + "/podcasts/" + podcastId, config);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Save or like podcast
export const savePodcast = createAsyncThunk(
  "podcasts/savePodcast",
  async (podcastId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.put(`${api_url}/podcasts/${podcastId}/like`, {}, config);
      thunkAPI.dispatch(getMe())
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
    podcast: null,
    audioPodcast: null,
    videoPodcast: null,
    // fileUrl: null,
    hidePlayer: false,
    uploadStatus: "idle",
    status: "idle",
    error: null,
  },
  reducers: {
    setAudioPodcast(state, action) {
      state.audioPodcast = action.payload;
    },
    setVideoPodcast(state, action) {
      state.videoPodcast = action.payload;
    },
    setHidePlayer(state, action) {
      state.hidePlayer = action.payload
    },
    resetAudio(state) {
      state.audioPodcast = null;
    },
    resetVideo(state) {
      state.videoPodcast = null;
    }
  },
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

    // Get podcast by id
    builder.addCase(getPodcast.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.podcast = action.payload;
    });

    // Upload podcast
    builder.addCase(uploadPodcast.pending, (state) => {
      state.uploadStatus = "loading";
      state.error = null;
    });
    builder.addCase(uploadPodcast.fulfilled, (state, action) => {
      state.uploadStatus = "succeeded";
      state.fileUrl = action.payload.url;
    });
    builder.addCase(uploadPodcast.rejected, (state, action) => {
      state.uploadStatus = "failed";
      state.error = action.payload
        ? action.payload.message
        : action.error.message;
    });
  },
});

export const { setAudioPodcast, setVideoPodcast, setHidePlayer, resetAudio, resetVideo } = podcastsSlice.actions;
export default podcastsSlice.reducer;
