import Attach from "../../images/attach.png";
import { useAuthContext } from "../../context/AuthContext";
import { useChatContext } from "../../context/ChatContext";
import { useState } from "react";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase";

const Input = function () {
  const [text, setText] = useState("");

  const { currentUser } = useAuthContext();
  const { data } = useChatContext();

  const handleSubmit = async function (e) {
    e.preventDefault();

    await updateDoc(doc(db, "chats", data.chatId), {
      messages: arrayUnion({
        id: Math.random() * 10 * 100,
        text,
        senderId: currentUser.uid,
        date: Timestamp.now(),
      }),
    });

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    setText("");
  };

  return (
    <form className="input" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
        value={text}
        required
      />
      <div className="send">
        <input
          type="file"
          style={{ display: "none" }}
          id="input-file"
          disabled
        />
        <label htmlFor="input-file">
          <img src={Attach} alt="" />
        </label>
        <button>Send</button>
      </div>
    </form>
  );
};

export default Input;
