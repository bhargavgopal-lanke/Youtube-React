import React from "react";

const ChatMessage = ({ image, reply }) => {
  return (
    <div className="flex items-center">
      <img src={image} alt="chat-img" className="rounded-full w-10" />
      <p className="pl-2">{reply}</p>
    </div>
  );
};

export default ChatMessage;
