import Input from "./Input";
import Cam from "../images/cam.png";
import Add from "../images/add.png";
import More from "../images/more.png";
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
        <span>
          {(
            user?.displayName[0].toUpperCase() + user?.displayName.slice(1)
          ).slice(0, 10)}
        </span>
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
