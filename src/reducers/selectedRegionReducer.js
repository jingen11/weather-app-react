export default (state = "", action) => {
  switch (action.type) {
    case "SELECT_REGION":
      return action.payload;
    default:
      return state;
  }
};
