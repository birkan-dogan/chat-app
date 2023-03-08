import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../firebase";

const Login = function () {
  const navigate = useNavigate();

  const handleSubmit = async function (e) {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn(email, password, navigate);
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat App</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" required />
          <input type="password" placeholder="password" required />
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
