import { useState } from "react";
import { friends } from "../firebase";

const Search = function () {
  const [username, setUsername] = useState(""); // for input
  const [user, setUser] = useState(null);

  const handleSearch = function () {
    friends(username, setUser);
  };

  const handleKey = function (e) {
    e.code === "Enter" && handleSearch();
  };

  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="Find a user"
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      {user && (
        <div className="userChat">
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
