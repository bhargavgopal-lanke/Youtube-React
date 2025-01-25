import React from "react";
import { IMAGEPATH } from "../../utils/Constants";

const ChatMessage = ({ name, reply }) => {
  return (
    <div className="flex flex-wrap items-center shadow-sm p-2">
      <img src={IMAGEPATH} alt="user-img" className="rounded-full w-10" />
      <span className="px-2 font-bold">{name}</span>
      <span>{reply}</span>
    </div>
  );
};

export default ChatMessage;
