export default function manageUsers(state = { users: [] }, action) {
  switch (action.type) {
    case "ADD_USER":
      let newUser = state.users.concat(action.user)
      return Object.assign({}, state, { users: newUser })
    default:
      return state
  }
}
