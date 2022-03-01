import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
};
const app = firebase.initializeApp(firebaseConfig)