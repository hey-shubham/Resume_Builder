import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div style={{ display: "flex" }}>
        <div className="terms-conditions">Terms and Conditions</div>
        <div className="privacy-policy">Privacy Policy</div>
        <div className="contact-us">Contact Us</div>
        <div className="about-us">About Us</div>
        <div className="accessibilty">Accessibility</div>
      </div>

      <div className="copyright">Copyright © 2022. All rights reserved.</div>
    </div>
  );
};

export default Footer;
