import React from "react";
import ChatMessage from "./ChatMessage";
import { IMAGEPATH } from "../../utils/Constants";

const LiveChat = () => {
  return (
    <div className="w-full h-[600px] m-2 p-2 border border-black bg-slate-100 rounded-lg">
      <ChatMessage image={IMAGEPATH} reply={"Chat reply"} />
    </div>
  );
};

export default LiveChat;
