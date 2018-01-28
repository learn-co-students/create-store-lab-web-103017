export default function manageUsers(state = { users: [] }, action) {
  switch (action.type) {
    case "ADD_USER":
      console.log("Action is ", action);
      return { users: state.users.concat(action.user) };
    default:
      return state;
  }
}
