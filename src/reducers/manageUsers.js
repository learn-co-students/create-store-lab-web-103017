export default function manageUsers(state = {users: []}, action){
  switch(action.type) {
    case 'ADD_USER':
      console.log(action.user)
      const user = {username: action.user.username, hometown: action.user.hometown}
      return Object.assign({}, state, { users: state.users.concat(user)});
    default:
      // console.log("Initial state.items length: %s", state.items.length);
      return state;
  }
}
