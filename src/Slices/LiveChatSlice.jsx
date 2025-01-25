import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
};
const LiveChatReducer = createSlice({
  name: "Live chat",
  initialState,
  reducers: {
    setLiveChat: (state, action) => {
      state.messages.push(action.payload);
    },
  },
});

export const { setLiveChat } = LiveChatReducer.actions;

export default LiveChatReducer.reducer;
