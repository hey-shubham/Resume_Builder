const initState = {
  School: "",
  City: "",
  Country: "",
  Degree: "",
  Year: "",
  Month: "",
};
const EduRed = (state = initState, action) => {
  switch (action.type) {
    case "ADD_EDU":
      return action.payload;

    default:
      return state;
  }
};

export default EduRed;
