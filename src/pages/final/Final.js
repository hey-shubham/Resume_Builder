import "./final.css";
import Resume from "./Resume";
const Final = () => {
  const colorArr = [1, 2, 3, 4, 5, 6];
  return (
    <div className="final">
      <Resume />
      <div className="side">
        <div className="heading">
          <div className="head">Here's Your Resume!</div>
          <div className="subhead">What do you want to do next?</div>
        </div>
        <div className="export">
          <b>Export Options</b>
          <div>Download</div>
          <div>Print</div>
          <div>Email</div>
        </div>
        <div className="format">
          <b>Formatting Options</b>
          <p>Layout</p>
          <div className="layout center-div">
            <div>CONDENSED</div>
            <div>STANDARD</div>
            <div>EXPANDED</div>
          </div>
        </div>
        <div className="font center-div">
          <div className="style">
            <p>Font Sytle</p>
            <select name="" id="style-opt">
              <option value="">Raleway</option>
              <option value="">Ubuntuy</option>
              <option value="">Source Sans Pro</option>
              <option value="">Times New Roman</option>
            </select>
          </div>
          <div className="size">
            <p>Font Size</p>
            <select name="" id="size-opt">
              <option value="">Small</option>
              <option value="">Medium</option>
              <option value="">Large</option>
            </select>
          </div>
        </div>
        <div className="colors">
          <p>Colors</p>
          <div className="rgb center-div">
            {colorArr.map((ele) => {
              return <div className={`color${ele}`}></div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Final;
<div className="final"></div>;
