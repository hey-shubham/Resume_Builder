import { MdOutlineArrowBackIosNew } from "react-icons/md";

import Sidebar from "../../comps/sidebar";
import WorkInputs from "./WorkInputs";

const Work = () => {
  const submitWork = () => {
    return;
  };

  return (
    <div className="center-div">
      <div className="form center-div">
        <div>
          <div className="center-div">
            <div>
              <h1 className="">Work Experience</h1>
              <p>Start with your most recent position.</p>
            </div>
          </div>
          <div>
            <WorkInputs onSubmitWork={submitWork} />
            <div className="green-button center-div" onClick={submitWork}>
              ENTER JOB DESCRIPTION
            </div>
            <div className="back center-div">
              <MdOutlineArrowBackIosNew />
              Back
            </div>
          </div>
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default Work;
