import { MdOutlineArrowBackIosNew } from "react-icons/md";
import Sidebar from "../../comps/sidebar";
import Month from "../../comps/Month";
import Year from "../../comps/Year";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { eduAction } from "../../actions/DataAction";
import { useDispatch } from "react-redux";

const Education = () => {
  const { EduRed } = useSelector((state) => state);
  const [edu, setEdu] = useState(EduRed);
  const eduHandler = (e) => {
    const { name, value } = e.target;
    setEdu({ ...edu, [name]: value });
  };
  let dispatch = useDispatch();
  const submitEdu = () => {
    dispatch(eduAction(edu));
  };
  useEffect(() => {
    document.querySelectorAll(".full")[0].focus();

    return () => {};
  }, []);

  return (
    <div className="center-div">
      <div className="form center-div">
        <div>
          <div className="center-div">
            <div>
              <h1>Education</h1>
              <p>Start with your most recent educational institution.</p>
            </div>
          </div>
          <div>
            <label htmlFor="">School Name</label>
            <br />
            <input
              type="text"
              className="full"
              name="School"
              onChange={(e) => {
                eduHandler(e);
              }}
            />
          </div>

          <div className="center-div">
            <div>
              <label htmlFor="">City/Town</label>
              <br />
              <input
                type="text"
                className="half"
                name="City"
                onChange={(e) => {
                  eduHandler(e);
                }}
              />
            </div>
            <div>
              <label htmlFor="">Country</label>
              <br />
              <input
                type="text"
                className="half"
                name="Country"
                onChange={(e) => {
                  eduHandler(e);
                }}
              />
            </div>
          </div>
          <div>
            <label htmlFor="">Degree</label>
            <br />
            <input
              type="text"
              className="full"
              name="Degree"
              onChange={(e) => {
                eduHandler(e);
              }}
            />
          </div>
          <div>
            <label htmlFor="">Graduation Date</label>
            <br />
            <Month workHandler={eduHandler} />
            <Year workHandler={eduHandler} />
          </div>
          <div>+ Add Desciption or Special Awards</div>
          <div className="green-button center-div" onClick={submitEdu}>
            SAVE & CONTINUE
          </div>
          <div className="back center-div">
            <MdOutlineArrowBackIosNew />
            Back
          </div>
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default Education;
