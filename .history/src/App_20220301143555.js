import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Contact from "./pages/contact/Contact";
import Layout from "./Layout";
import Work from "./pages/work/Work";
import Education from "./pages/education/Education";
import Skills from "./pages/skills/Skills";
import Front from "./pages/front/Front";
import Final from "./pages/final/Final";
import Summary from "./pages/summary/Summary";
import Login from "./comps/login/Login";
import Signup from "./comps/signup/Signup";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDKdCHB8sSoCwXuXDmrxJN7psZmUPCoL1c",
  authDomain: "test-1546d.firebaseapp.com",
  projectId: "test-1546d",
  storageBucket: "test-1546d.appspot.com",
  messagingSenderId: "585531628763",
  appId: "1:585531628763:web:4d38202cbc2f95d297c0fe",
  measurementId: "G-3N88LYFS1E",
};
function App() {
  initializeApp(firebaseConfig);
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Front />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work" element={<Work />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/final" element={<Final />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
