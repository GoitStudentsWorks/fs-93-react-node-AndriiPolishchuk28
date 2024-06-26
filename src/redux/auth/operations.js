import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { errorToast } from 'services/services';

export const BASE_URL = 'https://watertracker-backand-codekartel.onrender.com/';
axios.defaults.baseURL = BASE_URL;

const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const signupUser = createAsyncThunk(
  'auth/signupUser',
  async (formData, thunkApi) => {
    try {
      const { data } = await axios.post('/users/register', formData);
      setToken(data.newUser.token);
      return data;
    } catch (error) {
      errorToast(error.response.data.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const signinUser = createAsyncThunk(
  'auth/signinUser',
  async (formData, thunkApi) => {
    try {
      const { data } = await axios.post('/users/login', formData);
      setToken(data.user.token);
      return data;
    } catch (error) {
      errorToast(error.response.data.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const signoutUser = createAsyncThunk(
  'auth/signoutUser',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout');
      clearToken();
      return;
    } catch (error) {
      errorToast(error.response.data.message);
      return rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/RefreshUser',
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const token = state.auth.token;
    if (!token) return thunkApi.rejectWithValue("You don't have a token!");
    try {
      setToken(token);
      const { data } = await axios.get('/users/info');

      return data;
    } catch (error) {
      errorToast(error.response.data.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const updateUserAvatars = createAsyncThunk(
  'user/updateAvatars',
  async (file, thunkApi) => {
    try {
      const formData = new FormData();
      formData.append('avatar', file);

      const { data } = await axios.patch('users/avatars', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return data;
    } catch (error) {
      errorToast(error.response.data.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const updateUserInfo = createAsyncThunk(
  'user/updateInfo',
  async (userData, thunkApi) => {
    try {
      const { data } = await axios.patch('users/update', userData);
      return data;
    } catch (error) {
      errorToast(error.response.data.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const updateWaterRateThunk = createAsyncThunk(
  'water/calc',
  async (waterRate, thunkApi) => {
    try {
      const { data } = await axios.patch('water/calc', waterRate);
      return data;
    } catch (error) {
      errorToast(error.response.data.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
  // example  "amountOfWater": 5
);

export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async (formData, thunkApi) => {
    try {
      const { data } = await axios.post('/users/forgot-password', formData);
      setToken(data.user.token);
      return data;
    } catch (error) {
      errorToast(error.response.data.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const recoverPassword = createAsyncThunk(
  'auth/recoverPassword',
  async (formData, thunkApi) => {
    try {
      const { data } = await axios.post('/users/recover-password', formData);
      setToken(data.user.token);
      return data;
    } catch (error) {
      errorToast(error.response.data.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const setTokenFromGoogleAuth = createAsyncThunk(
  'auth/setTokenFromGoogleAuth',
  async (token, thunkApi) => {
    if (!token) return thunkApi.rejectWithValue("You don't have a token!");
    try {
      setToken(token);
      const { data } = await axios.get('/users/info');
      return data;
    } catch (error) {
      errorToast(error.response.data.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// export const updateUserInfoThunk = createAsyncThunk(
//   'user/update',
//   async ({ file, userData }, thunkApi) => {
//     try {
//       const formData = new FormData();
//       formData.append('avatar', file);
//       Object.entries(userData).forEach(([key, value]) => {
//         formData.append(key, value);
//       });

//       const { data } = await axios.patch('users/update', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       return data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );
