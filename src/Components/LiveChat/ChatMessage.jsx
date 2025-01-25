import React from "react";
import { IMAGEPATH } from "../../utils/Constants";

const ChatMessage = ({ name, reply }) => {
  return (
    <div className="flex items-center">
      <img src={IMAGEPATH} alt="user-img" className="rounded-full w-10" />
      <p className="px-2 font-bold">{name}</p>
      <p>{reply}</p>
    </div>
  );
};

export default ChatMessage;
