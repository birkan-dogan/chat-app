import React from "react";
import { Link } from "react-router-dom";
import close from "../../images/close.svg";

const Menu = ({ setResponsive }) => {
  return (
    <div className="menu" data-aos="fade-down" data-aos-duration="500">
      <nav>
        <ul onClick={() => setResponsive(false)}>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#works">How It Works</a>
          <a href="#support">Support</a>
        </ul>
      </nav>
      <div className="buttons-div">
        <div className="buttons">
          <Link to={"/login"}>Sign In</Link>
          <Link to={"/register"} className="register">
            Sign Up
          </Link>
        </div>
        <div className="hamburger" onClick={() => setResponsive(false)}>
          <img src={close} />
        </div>
      </div>
    </div>
  );
};

export default Menu;
