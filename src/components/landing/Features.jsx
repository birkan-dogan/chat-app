import React from "react";
import data from "../../helpers/featureData";

const Features = () => {
  return (
    <div className="feature">
      <div className="features-title">
        <h1>Amazing features for to make your life easier</h1>
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
      </div>
    </div>
  );
};

export default Features;
