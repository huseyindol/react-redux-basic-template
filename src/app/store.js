import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/Counter/counterSlice";
import userReducer from "../features/User/userSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
});
