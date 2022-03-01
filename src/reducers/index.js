import { combineReducers } from "redux";
import ContactRed from "./ContactRed";
import WorkRed from "./WorkRed";
import EduRed from "./EduRed";
import SkillsRed from "./SkillsRed";
import SummaryRed from "./SummaryRed";

const rootReducer = combineReducers({
  ContactRed,
  WorkRed,
  EduRed,
  SkillsRed,
  SummaryRed,
});

export default rootReducer;
