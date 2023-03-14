import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { auth } from "../firebase";

const Navbar = function () {
  const { currentUser } = useAuthContext(); // consuming context

  const navigate = useNavigate();

  const name = currentUser.displayName.toLowerCase();
  return (
    <div className="navbar">
      <span className="logo">Chat App</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{(name[0].toUpperCase() + name.slice(1)).slice(0, 10)}</span>
      </div>
      <div className="user">
        <button
          onClick={() => {
            signOut(auth);
            navigate("/");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
