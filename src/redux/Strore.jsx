import { configureStore } from "@reduxjs/toolkit";
import userListSlice from "./UserListSlice";
import errorMsgSlice from "./ErrorMsgSlice";


const store = configureStore({
    reducer: {
        createUser: userListSlice.reducer,
        errorMsg: errorMsgSlice.reducer,
    }
})

export default store;