// import Img from "../images/img.png";
import Attach from "../images/attach.png";
import { useAuthContext } from "../context/AuthContext";
import { useChatContext } from "../context/ChatContext";
import { useState } from "react";
import { sendMessage } from "../firebase";

const Input = function () {
  const [text, setText] = useState("");

  const { currentUser } = useAuthContext();
  const { data } = useChatContext();

  const handleSubmit = function (e) {
    e.preventDefault();
    sendMessage(text, currentUser, data);
    setText("");
  };

  return (
    <form className="input" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
        value={text}
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
