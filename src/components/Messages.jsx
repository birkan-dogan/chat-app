import { useEffect, useState } from "react";
import { useChatContext } from "../context/ChatContext";
import { getMessages } from "../firebase";
import Message from "./Message";

const Messages = function () {
  const [messages, setMessages] = useState([]);
  const { data } = useChatContext();

  useEffect(() => {
    data.chatId && getMessages(data, setMessages);
  }, [data.chatId]);
  // console.log(messages);

  return (
    <div className="messages">
      {messages?.map((message) => (
        <Message message={message} key={message.id} />
      ))}
    </div>
  );
};

export default Messages;
