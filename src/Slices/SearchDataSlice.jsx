import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchInfo: [],
};

const searchSlice = createSlice({
  name: "searchSlice",
  initialState,
  reducers: {
    setSearchData: (state, action) => {
      state.searchInfo.push(action.payload);
    },
  },
});

export const { setSearchData } = searchSlice.actions;

export default searchSlice.reducer;