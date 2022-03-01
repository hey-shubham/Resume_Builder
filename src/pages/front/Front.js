import { Link } from "react-router-dom";
import "./front.css";

const Front = () => {
  return (
    <div className="front center-div">
      <div className="form">
        <div>
          <div className="subhead">
            <span>3</span> Simple Steps
          </div>
          <div className="head">Getting Started</div>
        </div>
        <div>
          <div
            className="point center-div"
            style={{ justifyContent: "space-between" }}
          >
            <div className="num tic">1</div>
            <div className="point-txt">
              <div>
                Save time using pre-written bullets crafted by resume experts.
              </div>
            </div>
          </div>
          <div
            className="point center-div"
            style={{ justifyContent: "space-between" }}
          >
            <div className="num tic">2</div>
            <div className="point-txt">
              <div>
                Select a recruiter approved template that will get your resume
                noticed.
              </div>
            </div>
          </div>
          <div
            className="point center-div"
            style={{ justifyContent: "space-between" }}
          >
            <div className="num tic">3</div>
            <div className="point-txt">
              <div>Download or print your new resume!</div>
            </div>
          </div>
        </div>
        <Link to="/signup">
          <div className="green-button center-div">CONTINUE</div>
        </Link>
        <div className="tnc tic">
          By clicking “Continue”, you agree to our Terms and Conditions and
          Privacy Policy
        </div>
      </div>
      <div className="bgi"></div>
    </div>
  );
};

export default Front;
