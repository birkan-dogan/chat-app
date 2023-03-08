import { useState } from "react";
import { chatWorks, friends } from "../firebase";
import { useAuthContext } from "../context/AuthContext"; // need the currentUser.uid

const Search = function () {
  const [username, setUsername] = useState(""); // for input
  const [user, setUser] = useState(null);
  const { currentUser } = useAuthContext();

  const handleSearch = function () {
    friends(username, setUser);
  };

  const handleKey = function (e) {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = function () {
    chatWorks(user, currentUser);
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
        <div className="userChat" onClick={handleSelect}>
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
