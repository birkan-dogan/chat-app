import setup from "../../images/setup.svg";
import cloud from "../../images/cloud.svg";
import attach from "../../images/more.svg";
import enjoy from "../../images/settings.svg";
import blob from "../../images/redBlob.svg";
import AnimatedNumbers from "react-animated-numbers";
import { useState } from "react";

const Numbers = () => {
  const [nums, setNums] = useState({
    setup: 230,
    issues: 120,
    reviews: 148,
    enjoy: 75,
  });

  return (
    <div className="numbers" id="works">
      <div className="number">
        <img src={setup} alt="" />
        <AnimatedNumbers
          animateToNumber={nums.setup}
          fontStyle={{ fontSize: 40 }}
          configs={(number, index) => {
            return { mass: 1, tension: 230 * (index + 1), friction: 140 };
          }}
        />
        <p>Happy Customers</p>
      </div>
      <div className="number">
        <img src={attach} alt="" />
        <AnimatedNumbers
          animateToNumber={nums.issues}
          fontStyle={{ fontSize: 40 }}
          configs={(number, index) => {
            return { mass: 1, tension: 230 * (index + 1), friction: 140 };
          }}
        />
        <p>Issues Solved</p>
      </div>
      <div className="number">
        <img src={cloud} alt="" />
        <AnimatedNumbers
          animateToNumber={nums.reviews}
          fontStyle={{ fontSize: 40 }}
          configs={(number, index) => {
            return { mass: 1, tension: 230 * (index + 1), friction: 140 };
          }}
        />
        <p>Good Reviews</p>
      </div>
      <div className="number">
        <img src={enjoy} alt="" />
        <AnimatedNumbers
          animateToNumber={nums.enjoy}
          fontStyle={{ fontSize: 40 }}
          configs={(number, index) => {
            return { mass: 1, tension: 230 * (index + 1), friction: 140 };
          }}
        />
        <p>Press Articles</p>
      </div>
      <img src={blob} alt="" className="blob" />
    </div>
  );
};

export default Numbers;
