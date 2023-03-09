import { useEffect, useRef } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useChatContext } from "../context/ChatContext";

const Message = function ({ message }) {
  const { currentUser } = useAuthContext();
  const { data } = useChatContext();

  // to scroll automatically when the new message received
  const ref = useRef();
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      className={`message ${message.senderId === currentUser.uid && "owner"} `}
    >
      <div className="message-info">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        {/* <span>{message?.date?.nt.seconds}</span> */}
      </div>
      <div className="message-content">
        <p>{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
