import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/chat.png";
import hamburger from "../../images/list.svg";
import Menu from "./Menu";

const Header = () => {
  const [responsive, setResponsive] = useState(false);

  return (
    <header>
      <div className="logo">
        <img src={logo} />
        <h4>Converso</h4>
      </div>
      <nav>
        <ul>
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
        <div className="hamburger" onClick={() => setResponsive(true)}>
          <img src={hamburger} />
        </div>
        {responsive && <Menu setResponsive={setResponsive} />}
      </div>
    </header>
  );
};

export default Header;
