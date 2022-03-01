const initState = [
  {
    skill: "Java",
    id: 1,
  },
  {
    skill: "OOPs",
    id: 2,
  },
  {
    skill: "Javascript",
    id: 3,
  },
];

const SkillsRed = (state = initState, action) => {
  switch (action.type) {
    case "ADD_SKILLS":
      return action.payload;
    default:
      return state;
  }
};

export default SkillsRed;
