import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    filter: '',
  },
  reducers: {
    filterPhone(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { filterPhone } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
