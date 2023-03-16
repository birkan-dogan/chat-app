import Add from "../images/addAvatar.svg";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth, db, provider, storage } from "../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import logo from "../images/chat.png";

const Register = function () {
  const navigate = useNavigate();

  const handleSubmit = async function (e) {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    // firebase settings
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      // uploading avatar process
      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (dowloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: dowloadURL,
            });

            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: dowloadURL,
            });

            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/chat");
          });
        }
      );
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

      await setDoc(doc(db, "users", token), {
        uid: token,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      });
      await setDoc(doc(db, "userChats", token), {});

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
        <span className="logo">Create your account</span>
        <span className="title">It's totally free and super easy ✨</span>
        <button className="google" onClick={authGoogle}>
          Sign up with Google
        </button>
        <div className="email-thing">
          <div className="thing"></div>
          <p>Or, sign up with your email</p>
          <div className="thing"></div>
        </div>
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
