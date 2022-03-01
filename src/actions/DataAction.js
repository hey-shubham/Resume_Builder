//action makers

const contactAction = (contactData) => {
  return {
    type: "ADD_CONTACT",
    payload: contactData,
  };
};

const workAction = (workData) => {
  return {
    type: "ADD_WORK",
    payload: workData,
  };
};

const eduAction = (eduData) => {
  return {
    type: "ADD_EDU",
    payload: eduData,
  };
};

const skillsAction = (skillsData) => {
  return {
    type: "ADD_SKILLS",
    payload: skillsData,
  };
};

const summaryAction = (summaryData) => {
  return {
    type: "ADD_SUMMARY",
    payload: summaryData,
  };
};

export { contactAction, workAction, eduAction, skillsAction, summaryAction };
