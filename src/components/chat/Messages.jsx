import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useChatContext } from "../../context/ChatContext";
import { db } from "../../firebase";
import Message from "./Message";

const Messages = function () {
  const [messages, setMessages] = useState([]);
  const { data } = useChatContext();

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unsub();
    };
  }, [data.chatId]);

  return (
    <div className="messages">
      {messages?.map((message) => (
        <Message message={message} key={message.id} />
      ))}
    </div>
  );
};

export default Messages;
