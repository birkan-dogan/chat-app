// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

import {
  doc,
  setDoc,
  getFirestore,
  getDocs,
  query,
  collection,
  where,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth();

// To upload a file to Cloud Storage
// docs: https://firebase.google.com/docs/storage/web/upload-files#upload_files
const storage = getStorage();

// Initialize Firebase db
const db = getFirestore();

// register new user
// docs: https://firebase.google.com/docs/auth/web/start?hl=en&authuser=0#sign_up_new_users

export const signUp = async function (
  email,
  password,
  displayName,
  file,
  navigate
) {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const storageRef = ref(storage, displayName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          await updateProfile(res.user, {
            displayName,
            photoURL: downloadURL,
          });

          await setDoc(doc(db, "users", res.user.uid), {
            uid: res.user.uid,
            displayName,
            email,
            photoURL: downloadURL,
          });

          await setDoc(doc(db, "userChats", res.user.uid), {}); // we need the userChats collection to use inside the chats

          navigate("/");
        });
      }
    );
  } catch (error) {
    console.log(error);
  }
};

// Sign in a user with an email address and password
// docs: https://firebase.google.com/docs/auth/web/password-auth#sign_in_a_user_with_an_email_address_and_password

export const signIn = function (email, password, navigate) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      navigate("/");
    })
    .catch((error) => {
      console.log(error.message);
    });
};

// queries on Firebase --> https://firebase.google.com/docs/firestore/query-data/queries#web-version-9

export const friends = async function (username, setUser) {
  const usersRef = query(
    collection(db, "users"),
    where("displayName", "==", username)
  );

  try {
    const querySnapshot = await getDocs(usersRef);
    querySnapshot.forEach((doc) => setUser(doc.data()));
  } catch (error) {
    console.log(error);
  }
};
