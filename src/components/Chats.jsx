const Chats = () => {
  return (
    <div className="chats">
      {/* data will come from firestore */}
      <div className="userChat">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt=""
        />
        <div className="userChatInfo">
          <span>Hank</span>
          <p>Hello</p> {/* latest message comes here */}
        </div>
      </div>
      <div className="userChat">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt=""
        />
        <div className="userChatInfo">
          <span>Hank</span>
          <p>Hello</p> {/* latest message comes here */}
        </div>
      </div>
      <div className="userChat">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt=""
        />
        <div className="userChatInfo">
          <span>Hank</span>
          <p>Hello</p> {/* latest message comes here */}
        </div>
      </div>
    </div>
  );
};

export default Chats;
