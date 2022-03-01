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

function App() {
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
