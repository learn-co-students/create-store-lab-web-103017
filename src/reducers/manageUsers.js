export default function manageUsers(state = {
    users: [
  ]
}, action){

  switch(action.type)
  {
    case "ADD_USER":
      return {users: state.users.concat(action.user)};
    default:
      return state
  }
  console.log(state)
}
// xport default function shoppingListItemReducer(state = {
//   items: []
// }, action) {
//   switch(action.type) {
//
//     case 'INCREASE_COUNT':
//       return state.items.concat(state.items.length + 1);
//
//     default:
//       return state;
//   }
// }
