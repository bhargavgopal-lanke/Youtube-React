import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./Slices/appSlice";
import searchSlice from "./Slices/SearchDataSlice";

const store = configureStore({
  reducer: {
    appInfo: appSlice,
    searchInfo: searchSlice,
  },
});

export default store;
