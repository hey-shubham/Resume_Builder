import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRef } from "react";
import { initializeApp } from "firebase/app";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import 
const firebaseConfig = {
  apiKey: "AIzaSyDKdCHB8sSoCwXuXDmrxJN7psZmUPCoL1c",
  authDomain: "test-1546d.firebaseapp.com",
  projectId: "test-1546d",
  storageBucket: "test-1546d.appspot.com",
  messagingSenderId: "585531628763",
  appId: "1:585531628763:web:4d38202cbc2f95d297c0fe",
  measurementId: "G-3N88LYFS1E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 

const Signup = () => {
  const eref = useRef();
  const pref = useRef();
  const nref = useRef();
  const db = getFirestore();

  const signupHandler = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, eref.current.value, pref.current.value)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("user");

        try {
          // Add a new document with a generated id.
          const docRef = await addDoc(collection(db, "credentials"), {
            Name: nref.current.value,
            Email: eref.current.value,
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (error) {}
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  return (
    <div className="login login-form">
      <img src="./images/login.png" alt="login img" />
      <form action="" className="center-v">
        <input type="text" placeholder="Name" ref={nref} />
        <input type="text" placeholder="Email" ref={eref} />
        <input type="text" placeholder="Password" ref={pref} />
        <hr noshade="noshade" />
        <div className="google-login">
          <img src="./images/google-login.png" alt="" />
        </div>
        <div className="login-btn" onClick={signupHandler}>
          Sign Up
        </div>
      </form>
    </div>
  );
};

export default Signup;
