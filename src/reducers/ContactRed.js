const initState = {
  Name: "",
  Email: "",
  Address: "",
  City: "",
  Country: "",
  Phone: "",
};
const ContactRed = (state = initState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return action.payload;

    default:
      return state;
  }
};

export default ContactRed;
