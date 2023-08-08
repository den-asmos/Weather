import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  city: 'London',
};

export const citySlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    changeCity: (state, action) => ({ ...state, city: action.payload }),
  },
});

export const { changeCity } = citySlice.actions;
export default citySlice.reducer;
