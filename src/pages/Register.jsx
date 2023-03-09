import Add from "../images/addAvatar.svg";
import { signUp } from "../firebase";
import { useNavigate, Link } from "react-router-dom";

const Register = function () {
  const navigate = useNavigate();

  const handleSubmit = function (e) {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    signUp(email, password, displayName, file, navigate); // creating user with image
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat App</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input type="file" id="file" className="file-upload" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an avatar</span>
          </label>
          <button>Sign Up</button>
        </form>
        <p>
          One of us? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
