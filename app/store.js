import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/usererSlice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
