import React from "react";
import blob from "../../images/blob.svg";
import chatApp from "../../images/chat-app.png";

const Article = () => {
  const ReactRotatingText = require("react-rotating-text");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="article">
      <main>
        <h1>CHAT APP</h1> <br />
        <h1>FOR</h1>
        <div className="rotating-text">
          <ReactRotatingText
            items={["TEAMS", "DEVELOPERS", "ORGANISATIONS", "COMMUNITY"]}
            color="red"
          />
        </div>
        <p>Register, Find Your Friends And Start To Chat</p>
        <p>
          The platform provides a simple and user-friendly interface for sending
          and receiving messages, as well as additional features such as file
          sharing, group chats, and emojis.
        </p>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="email" placeholder="Invite your friends" />
          <button type="submit">Send</button>
        </form>
      </main>
      <div className="images">
        <img src={blob} alt="" className="blob" />
        <img src={chatApp} alt="" className="application" />
      </div>
    </div>
  );
};

export default Article;
