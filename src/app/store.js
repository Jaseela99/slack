import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../features/appSlice";
//wraps createStore to provide simplified configuration options and good defaults
//creates a redux store and it uses this slice reducer function to handle all updates to that state.

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});
