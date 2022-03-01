const initState = {
  Name: "",
  Job: "",
  Company: "",
  City: "",
  Country: "",
  Start_Month: "",
  Start_Year: "",
  End_Month: "",
  End_Year:""
};
const WorkRed = (state = initState, action) => {
  switch (action.type) {
    case "ADD_WORK":
      return action.payload;

    default:
      return state;
  }
};

export default WorkRed;
