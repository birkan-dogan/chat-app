const Message = function () {
  return (
    <div className="message owner">
      {/* not functional yet */}
      <div className="message-info">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt=""
        />
        <span>Just now</span>
      </div>
      <div className="message-content">
        <p>hello</p>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Message;
