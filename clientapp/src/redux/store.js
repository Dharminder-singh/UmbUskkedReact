// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import layoutReducer from "./layoutSlice";

const store = configureStore({
  reducer: {
    layout: layoutReducer
  }
});

export default store;
