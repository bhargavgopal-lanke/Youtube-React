import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chat: [
    {
      name: "",
      reply: "",
    },
  ],
};
const LiveChatReducer = createSlice({
  name: "Live chat",
  initialState,
  reducers: {
    setLiveChat: (state, action) => {
      const { name, reply } = action.payload;
      state.chat.name = name;
      state.chat.reply = reply;
    },
  },
});

export const { setLiveChat } = LiveChatReducer.actions;

export default LiveChatReducer;
