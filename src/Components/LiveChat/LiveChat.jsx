import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { setLiveChat } from "../../Slices/LiveChatSlice";

const LiveChat = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const i = setInterval(() => {
      // Api Polling
      console.log("Api polling");
      dispatch(
        setLiveChat({
          name: "Bhargav",
          reply: "Api Polling",
        })
      );
    }, 2000);

    return () => {
      clearInterval(i);
    };
  }, []);

  const { messages } = useSelector((state) => state?.LiveChatInfo);

  return (
    <div className="w-full h-[600px] m-2 p-2 border
     border-black bg-slate-100 rounded-lg overflow-y-scroll">
      {messages.map((msgs) => {
        return <ChatMessage name={msgs.name} reply={msgs.reply} />;
      })}
    </div>
  );
};

export default LiveChat;
