import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { setLiveChat } from "../../Slices/LiveChatSlice";
import { getRandomName } from "../../utils/helper/RandomNameGenerator";
import { getRandomStrings } from "../../utils/helper/RandomStrings";

const LiveChat = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const i = setInterval(() => {
      // Api Polling
      const randomName = getRandomName();
      const randomMsgs = getRandomStrings() + " 🚀";
      dispatch(
        setLiveChat({
          name: randomName,
          reply: randomMsgs,
        })
      );
    }, 2000);

    return () => {
      clearInterval(i);
    };
  }, []);

  const { messages } = useSelector((store) => store?.LiveChatInfo);

  return (
    <div
      className="w-full h-[600px] m-2 p-2 border
     border-black bg-slate-100 rounded-lg overflow-y-scroll"
    >
      {
        // Disclaimer: Don't use indexes as keys.
        messages.map((msgs, i) => {
          return <ChatMessage key={i} name={msgs.name} reply={msgs.reply} />;
        })
      }
    </div>
  );
};

export default LiveChat;
