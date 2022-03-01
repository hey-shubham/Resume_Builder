import { MdOutlineArrowBackIosNew } from "react-icons/md";

import { useState } from "react";
import Sidebar from "../../comps/sidebar";
import { useDispatch } from "react-redux";
import { skillsAction } from "../../actions/DataAction";
import { useSelector } from "react-redux";

const Skills = () => {
  const { SkillsRed } = useSelector(state => state);
  let dispatch = useDispatch();
  const submitSkills = () => {
    dispatch(skillsAction(skillsData));
  }
  const [skillsData, setSkillsData] = useState(SkillsRed);

  const addSkill = () => {
    setSkillsData([
      ...skillsData,
      {
        skill: "",
        id:
          skillsData.length > 0 ? skillsData[skillsData.length - 1].id + 1 : 1,
      },
    ]);
  };
  const skillChangeHandler = (e, idx) => {
    // console.log(e.target.value)
    const { value } = e.target;
    let changedData = [...skillsData];
    changedData[idx].skill = value;
    setSkillsData(changedData);
  };
  const delSkill = (id) => {
    setSkillsData(
      skillsData.filter((ele) => {
        return ele.id !== id;
      })
    );
  };
  return (
    <div className="center-div">
      <div className="form">
        <div>
          <div className="center-div">
            <div>
              <h1 className="">Skills</h1>
              <p>Add a few skills to show employers what you're good at.</p>
            </div>
          </div>
          <div>
            {skillsData.map((ele, idx) => {
              return (
                <div key={ele.id}>
                  <input
                    type="text"
                    id={ele.id}
                    value={ele.skill}
                    className="full"
                    onChange={(e) => {
                      skillChangeHandler(e, idx);
                    }}
                  />
                  <i
                    className="fa fa-trash can add-del"
                    onClick={() => delSkill(ele.id)}
                    style={{ position: "relative", right: "2vw" }}
                  ></i>
                </div>
              );
            })}

            <div onClick={addSkill} className="add-del">
              <i className="fa fa-edit"></i> Add Another Skill
            </div>
            <div className="green-button center-div" onClick={submitSkills}>
              SUBMIT SKILLS
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

export default Skills;
