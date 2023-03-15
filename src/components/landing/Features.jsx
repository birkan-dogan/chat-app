import React from "react";
import data from "../../helpers/featureData";
// import images
import blob from "../../images/featuresBackground.svg";
import blueBlob from "../../images/blueblob.svg";
import register from "../../images/register.svg";
import setup from "../../images/setup.svg";
import enjoy from "../../images/enjoy.svg";
import Numbers from "./Numbers";

const Features = () => {
  return (
    <div
      className="feature"
      data-aos="fade-up"
      data-aos-duration="1000"
      id="features"
    >
      <div className="features-title">
        <h1>Amazing features to make your life easier</h1>
        <p>
          Send your messages to your friends instantly, stay connected and keep
          in touch with people who matter most.
        </p>
      </div>
      <div className="features-icons">
        {data.map((element) => (
          <div
            className="icon"
            key={element.id}
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <img src={element.img} alt="" />
            <h2>{element.title}</h2>
            <p>{element.text}</p>
          </div>
        ))}
        <img src={blob} alt="" className="blob right" />
      </div>
      <Numbers />
      <div
        className="how-it-works"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <div className="works-title">
          <h1>How it works?</h1>
          <p>
            The app is web-based, you don't have to install it to your device,
            just create an account and find your friends to chat ✨
          </p>
        </div>
        <div className="works-icons">
          <div className="icon">
            <img src={register} alt="" />
            <h2>Register</h2>
            <p>Create an account</p>
          </div>
          <div className="icon">
            <img src={setup} alt="" />
            <h2>Setup your profile</h2>
            <p>Enter username and upload a profile picture</p>
          </div>
          <div className="icon">
            <img src={enjoy} alt="" />
            <h2>Enjoy the features</h2>
            <p>Ready to Chat!</p>
          </div>
        </div>

        <img src={blueBlob} alt="" className="blob left" />
      </div>
    </div>
  );
};

export default Features;
