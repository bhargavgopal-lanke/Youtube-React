import React from "react";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  return (
    <div className="w-full h-[600px] m-2 p-2 border border-black bg-slate-100 rounded-lg">
      <ChatMessage name={"Bhargav"}  reply={"Chat reply"} />
    </div>
  );
};

export default LiveChat;
