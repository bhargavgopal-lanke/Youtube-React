import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./Slices/appSlice";
import searchSlice from "./Slices/SearchDataSlice";
import LiveChatReducer from "./Slices/LiveChatSlice";

const store = configureStore({
  reducer: {
    appInfo: appSlice,
    searchInfo: searchSlice,
    LiveChatInfo: LiveChatReducer,
  },
});

export default store;
