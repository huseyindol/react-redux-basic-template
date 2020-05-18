import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./slice";
import counterReducer from "../features/Counter/slice";
import userReducer from "../features/User/slice";

export default configureStore({
  reducer: {
    main: mainReducer,
    counter: counterReducer,
    user: userReducer,
  },
});
