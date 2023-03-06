import Input from "./Input";
import Message from "./Message";

const Chat = function () {
  return (
    <div className="chat">
      <Message />
      <Input />
    </div>
  );
};

export default Chat;
