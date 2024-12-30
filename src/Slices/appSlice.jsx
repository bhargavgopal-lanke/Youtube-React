import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: "",
};

const appSlice = createSlice({
  name: "appInfo",
  initialState,
  reducers: {
    toggleMenu: (state, action) => {
      state.toggle = action.payload;
    },
  },
});

export const { toggleMenu } = appSlice.actions;

export default appSlice.reducer;
