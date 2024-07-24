import { configureStore } from '@reduxjs/toolkit';
import formReducer from './FormSlice';
import userListReducer from './UserListSlice';
import errorMsgReducer from './ErrorMsgSlice';

const store = configureStore({
  reducer: {  
    userList: userListReducer, 
  }
});

export default store;
