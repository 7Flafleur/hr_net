import { configureStore } from '@reduxjs/toolkit';
import formReducer from './FormSlice';
import userListReducer from './UserListSlice';
import errorMsgReducer from './ErrorMsgSlice';

const store = configureStore({
  reducer: {
    form: formReducer,
    userList: userListReducer,
    errors: errorMsgReducer
  }
});

export default store;
