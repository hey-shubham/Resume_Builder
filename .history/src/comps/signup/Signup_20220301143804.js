import firebase from 'firebase';
import { useRef } from "react";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore }from "firebase/firestore"


const Signup = () => {
  const eref = useRef();
  const pref = useRef();
  const nref = useRef();
  // const db = firebase.firestore();
  const db = getFirestore()
  const auth = getAuth

  const signupHandler = () => {
    createUserWithEmailAndPassword(auth,eref.current.value, pref.current.value)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);

        try {
          // Add a new document with a generated id.
          const docRef = await db.collections('credentials').add({
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
