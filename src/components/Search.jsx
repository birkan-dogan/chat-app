import { useState } from "react";
import { useAuthContext } from "../context/AuthContext"; // need the currentUser.uid
import { db } from "../firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { useChatContext } from "../context/ChatContext";

const Search = function () {
  const [username, setUsername] = useState(""); // for input
  const [user, setUser] = useState(null);
  const { currentUser } = useAuthContext();
  const { dispatch } = useChatContext();

  const handleSearch = async function () {
    // queries on Firebase --> https://firebase.google.com/docs/firestore/query-data/queries#web-version-9

    const usersRef = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    try {
      const querySnapshot = await getDocs(usersRef);
      querySnapshot.forEach((doc) => setUser(doc.data()));
    } catch (error) {
      console.log(error);
    }
  };

  const handleKey = function (e) {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async function (user) {
    // check whether the group(chats in firestore) exists, if not create

    const combinedId = currentUser.uid + user.uid;
    dispatch({ type: "Change_user", payload: user });

    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        // create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        // update process: https://firebase.google.com/docs/firestore/manage-data/add-data#update_fields_in_nested_objects
        // create user chats

        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (error) {}
    setUser(null);
    setUsername("");
  };

  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="Find a user"
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>
      {user && (
        <div className="userChat" onClick={() => handleSelect(user)}>
          <img src={user.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
