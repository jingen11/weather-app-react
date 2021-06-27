export default (state = "", action) => {
  switch (action.type) {
    case "SELECT_STATE":
      return action.payload;
    default:
      return state;
  }
};
