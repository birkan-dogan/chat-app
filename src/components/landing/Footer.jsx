import logo from "../../images/chat.png";

const Footer = () => {
  return (
    <footer>
      <div className="logo-text">
        <div className="logo">
          <img src={logo} alt="" />
          <h3>Converso</h3>
        </div>
        <div className="text">
          <p>
            This application helps you make uninterrupted intercontinental
            communication.
          </p>
        </div>
      </div>
      <div className="lists">
        <ul>
          <h6>Home 🏠</h6>
          <li>Product</li>
          <li>Pricing</li>
          <li>Business</li>
          <li>Enterprise</li>
        </ul>
        <ul>
          <h6>About Us 👨‍💻👩‍💻</h6>
          <li>Company</li>
          <li>Leadership</li>
          <li>Careers</li>
          <li>Diversity</li>
        </ul>
        <ul>
          <h6>Resources 📝</h6>
          <li>Andy Guide</li>
          <li>Forum</li>
          <li>Support</li>
          <li>App Directory</li>
        </ul>
        <ul>
          <h6>Tutorial 🗒</h6>
          <li>10 Leadership Styles</li>
          <li>Executive Summary Tips</li>
          <li>Prevent Team Burnout</li>
          <li>What are OKRs?</li>
        </ul>
      </div>
      <p className="reserved">
        © All Rights Reserved ~{" "}
        <a href="https://github.com/birkan-dogan" target="_blank">
          Birkan Dogan
        </a>
      </p>
    </footer>
  );
};

export default Footer;
