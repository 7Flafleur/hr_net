import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {
    firstName: '',
    lastName: '',
    dob:'',
    startDate:'',
    street:'',
    city:'',
    state:'',
    zipCode:'',
    department:''
  }
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state.formData[field] = value;
    },
    resetForm: (state) => {
      state.formData = initialState.formData;
    }
  }
});

export const { updateField, resetForm } = formSlice.actions;
export default formSlice.reducer;
