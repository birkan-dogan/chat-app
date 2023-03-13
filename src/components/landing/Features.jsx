import React from "react";
import data from "../../helpers/featureData";
import blob from "../../images/featuresBackground.svg";

const Features = () => {
  return (
    <div className="feature">
      <div className="features-title">
        <h1>Amazing features to make your life easier</h1>
        <p>
          Send your messages to your friends instantly, stay connected and keep
          in touch with people who matter most.
        </p>
      </div>
      <div className="features-icons">
        {data.map((element) => (
          <div className="icon" key={element.id}>
            <img src={element.img} alt="" />
            <h2>{element.title}</h2>
            <p>{element.text}</p>
          </div>
        ))}
        <img src={blob} alt="" className="blob right" />
        <img src={blob} alt="" className="blob left" />
      </div>
      <div className="how-it-works">
        <div className="works-title">
          <h1>How it works?</h1>
          <p>
            The app is web-based, you don't have to install it to your device,
            just create an account and find your friends to chat ✨
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
