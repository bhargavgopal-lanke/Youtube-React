import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
};

const headerSlice = createSlice({
  name: "headerInfo",
  initialState,
  reducers: {
    setSideNavToggle: (state, action) => {
      state.toggle = action.payload;
    },
  },
});

export default headerSlice;
