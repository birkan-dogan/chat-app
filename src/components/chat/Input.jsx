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
import Emoji from "./Emoji";

const Input = function () {
  const [text, setText] = useState("");
  const [showPicker, setShowPicker] = useState(false);

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
        onClick={() => setShowPicker(false)}
      />
      <div className="send">
        <input
          type="file"
          style={{ display: "none" }}
          id="input-file"
          disabled
          onClick={() => setShowPicker(false)}
        />
        <img
          className="emoji-icon"
          src="https://icons.getbootstrap.com/assets/icons/emoji-smile.svg"
          onClick={() => setShowPicker(!showPicker)}
        />
        <div>{showPicker && <Emoji setText={setText} />}</div>
        <label htmlFor="input-file">
          <img src={Attach} alt="" />
        </label>
        <button>Send</button>
      </div>
    </form>
  );
};

export default Input;
