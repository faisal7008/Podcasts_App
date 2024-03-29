import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const api_url = `${process.env.REACT_APP_API_URL}`;

// Fetch episodes
export const getAllEpisodes = createAsyncThunk(
  'episodes/getAllEpisodes',
  async (podcastId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(api_url + '/episodes/' + podcastId, config);
      // thunkAPI.dispatch(resetEpisode())
      return response.data;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

// Add episode
export const addEpisode = createAsyncThunk('episodes/addEpisode', async (episode, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.token;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.post(api_url + '/episodes', episode, config);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

// delete episode
export const deleteEpisode = createAsyncThunk(
  'episodes/deleteEpisode',
  async (episodeId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.delete(api_url + '/episodes/' + episodeId, config);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const storedEpisodeJson = localStorage.getItem('currentEpisode');
const storedEpisode = storedEpisodeJson ? JSON.parse(storedEpisodeJson) : null;

const episodesSlice = createSlice({
  name: 'episodes',
  initialState: {
    episode: storedEpisode || null,
    episodes: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    setEpisode(state, action) {
      state.episode = action.payload;
      // Save the podcast in localStorage
      localStorage.setItem('currentEpisode', JSON.stringify(action.payload));
    },
    resetEpisode(state) {
      state.episode = null;
      localStorage.removeItem('currentEpisode');
    },
  },
  extraReducers: (builder) => {
    // Fetch episodes
    builder.addCase(getAllEpisodes.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(getAllEpisodes.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.episodes = action.payload;
      // state.episode = action.payload[0];
    });
    builder.addCase(getAllEpisodes.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload ? action.payload.message : action.error.message;
    });

    // Add episode
    builder.addCase(addEpisode.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(addEpisode.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.episodes.push(action.payload);
    });
    builder.addCase(addEpisode.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload ? action.payload.message : action.error.message;
    });

    //delete episode
    builder.addCase(deleteEpisode.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.episodes = state.episodes?.filter((ep) => ep?._id !== action.payload?.id);
    });
  },
});

export const { setEpisode, resetEpisode } = episodesSlice.actions;
export default episodesSlice.reducer;
