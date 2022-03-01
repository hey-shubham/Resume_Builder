import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { workAction } from "../../actions/DataAction";
import { useEffect } from "react";

import Month from "../../comps/Month";
import Year from "../../comps/Year";

const WorkInputs = ({ onSubmitWork }) => {
  const { WorkRed } = useSelector((state) => state);
  const [work, setWork] = useState(WorkRed);

  const workHandler = (e) => {
    const { name, value } = e.target;
    setWork({ ...work, [name]: value });
  };
  const dispatch = useDispatch();
  onSubmitWork(dispatch(workAction(work)));
  // jb argument read krega/phunchega, dipatch fire.

  useEffect(() => {
    document.getElementsByClassName("full")[0].focus();

    return () => {
      console.log("unmount hote hue");
    };
  }, []);
  return (
    <div>
      <div>
        <label htmlFor="">Job Title</label>
        <br />
        <input
          type="text"
          name="Job"
          className="full"
          onChange={(e) => workHandler(e)}
        />
      </div>
      <div>
        <label htmlFor="">Company</label>
        <br />
        <input
          type="text"
          name="Company"
          className="full"
          onChange={(e) => workHandler(e)}
        />
      </div>
      <div className="center-div">
        <div>
          <label htmlFor="">City/Town</label>
          <br />
          <input
            type="text"
            name="City"
            className="half"
            onChange={(e) => workHandler(e)}
          />
        </div>
        <div>
          <label htmlFor="">Country</label>
          <br />
          <input
            type="text"
            name="Country"
            className="half"
            onChange={(e) => workHandler(e)}
          />
        </div>
      </div>
      <div>
        <label htmlFor="">Start Date</label>
        <br />
        <Month workHandler={workHandler} month="Start_Month" />
        <Year workHandler={workHandler} year="End_Year" />
      </div>
      <div>
        <label htmlFor="">End Date</label>
        <br />
        <Month workHandler={workHandler} month="End_Month" />
        <Year workHandler={workHandler} year="End_Year" />
      </div>
    </div>
  );
};

export default WorkInputs;
