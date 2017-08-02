export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return {friends:[...state.friends,action.friend]}
    case 'REMOVE_FRIEND':

      const removeFriendId = action.id
      const arrayFriends = state.friends.filter(friend => friend.id !== action.id)
      return state = {friends: arrayFriends}

    default:
        return state;
  }
}
