import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  errors: {}
};

const errorMsgSlice = createSlice({
  name: 'errors',
  initialState,
  reducers: {
    setError: (state, action) => {
      const { field, message } = action.payload;
      state.errors[field] = message;
    },
    clearError: (state, action) => {
      const { field } = action.payload;
      delete state.errors[field];
    },
    clearAllErrors: (state) => {
      state.errors = {};
    }
  }
});

export const { setError, clearError, clearAllErrors } = errorMsgSlice.actions;
export default errorMsgSlice.reducer;
