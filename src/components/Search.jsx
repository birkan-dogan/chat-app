const Search = function () {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user" />
      </div>
      <div className="userChat">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt=""
        />
        <div className="userChatInfo">
          <span>Hank</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
