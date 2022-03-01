import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
};
const app = firebase.initializeApp(firebaseConfig)