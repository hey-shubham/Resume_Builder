const initState = "";

const SummaryRed = (state = initState, action) => {
  switch (action.type) {
    case "ADD_SUMMARY":
      return action.payload;
    default:
      return state;
  }
};

export default SummaryRed;
