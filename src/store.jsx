import { configureStore } from "@reduxjs/toolkit";
import headerSlice from "./Slices/Header-Slice";

const store = configureStore({
  reducer: {
    headerInfo: headerSlice,
  },
});

export default store;
