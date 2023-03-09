import Input from "./Input";
import Cam from "../images/cam.png";
import Add from "../images/add.png";
import More from "../images/more.png";
import Messages from "./Messages";
import { useChatContext } from "../context/ChatContext";

const Chat = function () {
  const {
    data: { user },
  } = useChatContext();

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{user?.displayName}</span> {/* username */}
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
