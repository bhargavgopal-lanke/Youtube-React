import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { setLiveChat } from "../../Slices/LiveChatSlice";
import { getRandomName } from "../../utils/helper/RandomNameGenerator";
import { getRandomStrings } from "../../utils/helper/RandomStrings";

const LiveChat = () => {
  const dispatch = useDispatch();

  const [chatMsg, setChatMsg] = useState();

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomName = getRandomName();
    dispatch(
      setLiveChat({
        name: randomName,
        reply: chatMsg,
      })
    );
    setChatMsg("");
  };

  return (
    <>
      <div
        className="w-full h-[600px] m-2 p-2 border
     border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse"
      >
        {
          // Disclaimer: Don't use indexes as keys.
          messages.map((msgs, i) => {
            return <ChatMessage key={i} name={msgs.name} reply={msgs.reply} />;
          })
        }
      </div>
      <form
        className="border border-black p-2"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          name="chat"
          type="text"
          value={chatMsg}
          alt="chat-box"
          onChange={(e) => setChatMsg(e?.target?.value)}
          className="border border-black p-3 w-52"
        />
        <button
          type="submit"
          className="w-38 px-8 py-3 ml-3 bg-slate-500 border border-black text-white"
        >
          send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
