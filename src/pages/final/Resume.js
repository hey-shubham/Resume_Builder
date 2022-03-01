import { useSelector } from "react-redux";

const Resume = () => {
  const { ContactRed, WorkRed, EduRed, SkillsRed, SummaryRed } = useSelector((state) => {
    return state;
  });
  return (
    <div className="resume">
      {ContactRed.Name}
      {WorkRed.Company}
      {WorkRed.Year}
      {WorkRed.Start_Month}
      {EduRed.Degree}
      {EduRed.Year}
      {EduRed.Month}
      {SkillsRed.map((ele) => {
        return ele.skill;
      })}
      {SummaryRed}
    </div>
  );
};

export default Resume;
