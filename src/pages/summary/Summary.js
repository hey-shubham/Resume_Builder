import { useEffect, useState } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { summaryAction } from "../../actions/DataAction";
const Summary = () => {
  const { SummaryRed } = useSelector((state) => state);
  const [summary, setSummary] = useState(SummaryRed);

  let dispatch = useDispatch();
  const summaryHandler = () => {
    dispatch(summaryAction(summary));
  };
  useEffect(() => {
    document.getElementsByName("summary")[0].focus();

    return () => {};
  }, []);

  return (
    <div className="form">
      <h1 style={{ margin: "0.5rem" }}>Summary</h1>
      <h4 style={{ margin: "1rem auto" }}>
        Briefly describe the value that you bring through your skills,
        background and experience.
      </h4>
      <textarea
        name="summary"
        id=""
        cols="57"
        rows="19"
        placeholder="Sell yourself for the job. Include 3-5 sentences. Customize your summary to the job you are applying to."
        style={{fontSize:"16px", padding: "6px 8px"}}
        onChange={(e) => setSummary(e.target.value)}
      ></textarea>
      <div className="green-button center-div" onClick={summaryHandler}>
        SAVA & CONTINUE
      </div>
      <div className="back center-div">
        <MdOutlineArrowBackIosNew />
        Back
      </div>
    </div>
  );
};

export default Summary;
