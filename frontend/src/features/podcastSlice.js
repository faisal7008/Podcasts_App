import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getMe } from './userSlice';

const api_url = `${process.env.REACT_APP_API_URL}`;

// Fetch all podcasts
export const getAllPodcasts = createAsyncThunk('podcasts/getAllPodcasts', async (_, thunkAPI) => {
  try {
    const response = await axios.get(api_url + '/podcasts');
    return response.data;
  } catch (error) {
    console.log(error.message);
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

// Fetch podcasts
export const getMyPodcasts = createAsyncThunk('podcasts/getMyPodcasts', async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.token;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(api_url + '/podcasts/me', config);
    return response.data;
  } catch (error) {
    console.log(error.message);
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

// Add podcast
export const addPodcast = createAsyncThunk('podcasts/addPodcast', async (podcast, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.token;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.post(api_url + '/podcasts', podcast, config);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

// Get podcast by Id
export const getPodcast = createAsyncThunk('podcasts/getPodcast', async (podcastId, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.token;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(api_url + '/podcasts/' + podcastId, config);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

// Delete podcast by Id
export const deletePodcast = createAsyncThunk(
  'podcasts/deletePodcast',
  async (podcastId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.delete(api_url + '/podcasts/' + podcastId, config);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

// Save or like podcast
export const savePodcast = createAsyncThunk('podcasts/savePodcast', async (podcastId, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.token;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.put(`${api_url}/podcasts/${podcastId}/like`, {}, config);
    thunkAPI.dispatch(getMe());
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const storedPodcastJson = localStorage.getItem('currentPodcast');
const storedPodcast = storedPodcastJson ? JSON.parse(storedPodcastJson) : null;
const storedAudioPodcastJson = localStorage.getItem('currentAudioPodcast');
const storedAudioPodcast = storedAudioPodcastJson ? JSON.parse(storedAudioPodcastJson) : null;
const storedVideoPodcastJson = localStorage.getItem('currentVideoPodcast');
const storedVideoPodcast = storedVideoPodcastJson ? JSON.parse(storedVideoPodcastJson) : null;

const podcastsSlice = createSlice({
  name: 'podcasts',
  initialState: {
    podcasts: [],
    myPodcasts: [],
    podcast: storedPodcast || null,
    audioPodcast: storedAudioPodcast || null,
    videoPodcast: storedVideoPodcast || null,
    // fileUrl: null,
    hidePlayer: false,
    uploadStatus: 'idle',
    status: 'idle',
    message: null,
    error: null,
  },
  reducers: {
    setPodcast(state, action) {
      state.podcast = action.payload;
      // Save the podcast in localStorage
      localStorage.setItem('currentPodcast', JSON.stringify(action.payload));
    },
    setAudioPodcast(state, action) {
      state.audioPodcast = action.payload;
      // Save the podcast in localStorage
      localStorage.setItem('currentAudioPodcast', JSON.stringify(action.payload));
    },
    setVideoPodcast(state, action) {
      state.videoPodcast = action.payload;
      // Save the podcast in localStorage
      localStorage.setItem('currentVideoPodcast', JSON.stringify(action.payload));
    },
    setHidePlayer(state, action) {
      state.hidePlayer = action.payload;
    },
    resetPodcast(state) {
      state.podcast = null;
      localStorage.removeItem('currentPodcast');
    },
    resetAudio(state) {
      state.audioPodcast = null;
      localStorage.removeItem('currentAudioPodcast');
    },
    resetVideo(state) {
      state.videoPodcast = null;
      localStorage.removeItem('currentVideoPodcast');
    },
  },
  extraReducers: (builder) => {
    // Fetch podcasts
    builder.addCase(getAllPodcasts.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(getAllPodcasts.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.podcasts = action.payload;
    });
    builder.addCase(getAllPodcasts.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload ? action.payload.message : action.error.message;
    });

    // Add podcast
    builder.addCase(addPodcast.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(addPodcast.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.podcasts.push(action.payload);
    });
    builder.addCase(addPodcast.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload ? action.payload.message : action.error.message;
    });

    // Get podcast by id
    builder.addCase(getPodcast.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.podcast = action.payload;
    });
    // Get my podcasts
    builder.addCase(getMyPodcasts.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.myPodcasts = action.payload;
    });
    // Delete podcast by id
    builder.addCase(deletePodcast.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.podcasts = state.podcasts?.filter((pod) => pod?._id !== action.payload?.id);
      state.podcast = null;
      state.message = action.payload?.successMsg;
    });
  },
});

export const { setPodcast, setAudioPodcast, setVideoPodcast, setHidePlayer, resetPodcast, resetAudio, resetVideo } = podcastsSlice.actions;
export default podcastsSlice.reducer;
