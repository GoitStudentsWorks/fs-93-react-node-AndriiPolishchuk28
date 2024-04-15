import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://watertracker-backand-codekartel.onrender.com';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MWJhZmRlY2U3NmYyMzhkOGNhZTMyZCIsImlhdCI6MTcxMzE2NDI1NiwiZXhwIjoxNzEzMjQ3MDU2fQ.tOWsV5ScRNaqiBxgQE83J5H3hfaIFMcpzFO5Ucrx3pI';
axios.defaults.headers.common.Authorization = `Bearer ${token}`;

const getMonthPercentage = async date => {
  const { data } = await axios.get(`/month/?date=${date}`);
  return data;
};

export const getMonthPercentageThunk = createAsyncThunk(
  'month/water',
  async (date, thunkApi) => {
    try {
      return await getMonthPercentage(date);
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
