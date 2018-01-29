export default function manageUsers(state = {
  users: []
}, action){
  console.log('the state is', state);
  console.log('the action is', action);
  switch (action.type) {
    case 'ADD_USER':
      console.log('Adding User', action.user);
      return Object.assign({}, state, state.users.push(action.user))
    default:
      return state;
  }

}
