import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./Slices/appSlice";

const store = configureStore({
  reducer: {
    appInfo: appSlice,
  },
});

export default store;
