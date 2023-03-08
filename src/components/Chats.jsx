import { useEffect, useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { getChats } from "../firebase";

const Chats = () => {
  const [chats, setChats] = useState([]);
  const { currentUser } = useAuthContext();

  useEffect(() => {
    // to see realtime updates on firestore, we can use onSnapshot() method

    currentUser.uid && getChats(currentUser.uid, setChats);
  }, [currentUser.uid]);
  return (
    <div className="chats">
      {/* data will come from firestore */}
      {Object.entries(chats)?.map((chat) => (
        <div className="userChat" key={chat[0]}>
          <img src={chat[1].userInfo.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{chat[1].userInfo.displayName}</span>
            <p>{chat[1].userInfo.lastMessage?.text}</p>{" "}
            {/* latest message comes here */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
