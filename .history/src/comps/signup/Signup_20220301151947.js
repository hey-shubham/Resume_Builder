import React from "react";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore";

const Signup = () => {
  const eref = React.createRef(null);
  const pref = React.createRef(null);
  const nref = React.createRef(null);
  const db = getFirestore();
  const auth = getAuth();

  const signupHandler = () => {
    // console.log(eref.current.value,pref.current.value)
    createUserWithEmailAndPassword(auth, eref.current.value, pref.current.value)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);

        try {
          // Add a new document with a generated id.
          const docRef = await addDoc(collection(db, "credentials"), {
            Name: nref.current.value,
            Email: eref.current.value,
            console.log(nref.current.va)
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (error) {}
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
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
