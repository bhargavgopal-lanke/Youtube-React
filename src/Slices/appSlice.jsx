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
    closeMenu: (state) => {
      state.toggle = false;
    }
  },
});

export const { toggleMenu, closeMenu } = appSlice.actions;

export default appSlice.reducer;
