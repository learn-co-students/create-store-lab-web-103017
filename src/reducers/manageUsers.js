export default function manageUsers(state = {users: []}, action){
  switch (action.type) {
    case 'ADD_USER':
      console.log('testing state', state)
      console.log('testing action', action.user)
      return {users: [...state.users, action.user]}
    default:
      return state;
  }
}
