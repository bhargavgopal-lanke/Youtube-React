import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: true,
};

const appSlice = createSlice({
  name: "appInfo",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.toggle = !state.toggle;
    },
  },
});

export const { toggleMenu } = appSlice.actions;

export default appSlice.reducer;
