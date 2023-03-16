import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase";
import logo from "../images/chat.png";

const Login = function () {
  const navigate = useNavigate();

  const handleSubmit = async function (e) {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/chat");
    } catch (error) {
      console.log(error);
    }
  };

  const authGoogle = async function () {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      navigate("/chat");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="formContainer">
      <nav className="navigate-home" onClick={() => navigate("/")}>
        <img src={logo} alt="" />
      </nav>
      <div className="formWrapper" data-aos="fade-up" data-aos-duration="1000">
        <span className="logo">Sign in to your account</span>
        <span className="title">
          Login to your account for a faster checkout 🎯
        </span>
        <button className="google" onClick={authGoogle}>
          Sign In with Google
        </button>
        <div className="email-thing">
          <div className="thing"></div>
          <p>Or, sign in with your email</p>
          <div className="thing"></div>
        </div>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Enter your email" required />
          <input type="password" placeholder="Enter your password" required />
          <button>Sign In</button>
        </form>
        <p>
          Don't have an account: <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
