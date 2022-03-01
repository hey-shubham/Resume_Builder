import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
};
const app = firebase.initializeApp(firebaseConfig)