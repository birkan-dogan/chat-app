import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { useChatContext } from "../../context/ChatContext";
import { db } from "../../firebase";

const Chats = ({ element }) => {
  const [chats, setChats] = useState([]);

  const { currentUser } = useAuthContext();
  const { dispatch } = useChatContext();

  useEffect(() => {
    // to see realtime updates on firestore, we can use onSnapshot() method
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };
    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (user) => {
    dispatch({ type: "Change_user", payload: user });
    element.current.classList.add("mobile-responsive");
  };

  return (
    <div className="chats">
      {Object.entries(chats)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => (
          <div
            className="userChat"
            key={chat[0]}
            onClick={() => handleSelect(chat[1].userInfo)}
          >
            <img src={chat[1].userInfo.photoURL} alt="" />
            <div className="userChatInfo">
              <span>
                {chat[1].userInfo.displayName[0].toUpperCase() +
                  chat[1].userInfo.displayName.slice(1)}
              </span>
              <p>{chat[1].lastMessage?.text}</p>{" "}
              {/* latest message comes here */}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Chats;
