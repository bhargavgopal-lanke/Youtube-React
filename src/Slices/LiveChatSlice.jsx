import { createSlice } from "@reduxjs/toolkit";
import { LIVECHATCOUNT } from "../utils/Constants";

const initialState = {
  messages: [],
};
const LiveChatReducer = createSlice({
  name: "Live chat",
  initialState,
  reducers: {
    setLiveChat: (state, action) => {
      // at position 10 remove 1 item
      state.messages.splice(LIVECHATCOUNT, 1);
      state.messages.unshift(action.payload);
    },
  },
});

export const { setLiveChat } = LiveChatReducer.actions;

export default LiveChatReducer.reducer;
