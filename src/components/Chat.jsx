import Input from "./Input";
import Cam from "../images/cam.svg";
import Add from "../images/add.svg";
import More from "../images/more.svg";
import Back from "../images/backArrow.svg";
import Messages from "./Messages";
import { useChatContext } from "../context/ChatContext";

const Chat = function ({ element }) {
  const {
    data: { user },
  } = useChatContext();

  const handleClick = function () {
    element.current.classList.remove("mobile-responsive");
  };

  return (
    <div className="chat">
      <div className="chatInfo">
        <img src={Back} onClick={handleClick} style={{ cursor: "pointer" }} />
        <div className="userInfo">
          <img src={user?.photoURL} alt="" />
          {user?.displayName?.slice(0, 10)}
        </div>
        {/* username */}
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
