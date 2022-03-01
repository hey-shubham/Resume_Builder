import { Link } from "react-router-dom";
import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src="./images/firstJob.png" alt="" />
      </Link>
      <div style={{ display: "flex" }}>
        <Link to="/contact">
          <div className="contact-info">Contact Info</div>
        </Link>
        <Link to="/work">
          <div className="work-experience">Work Experience</div>
        </Link>
        <Link to="/education">
          <div className="education">Education</div>
        </Link>

        <Link to="/skills">
          <div className="skills">Skills</div>
        </Link>
        <Link to="/summary">
          <div className="summary">Summary</div>
        </Link>
        <Link to="/final">
          <div className="finalize">Finalize</div>
        </Link>
      </div>
      <div style={{ display: "flex" }}>
        <div className="contact-us">CONTACT US</div>
        <div className="my-about">MY ACCOUNT</div>
      </div>
    </div>
  );
};

export default Header;
