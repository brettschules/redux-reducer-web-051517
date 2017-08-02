export function managePresents(state, action){
  switch (action.type) {
  case 'INCREASE':
    console.log(action)
    return {numberOfPresents: state.numberOfPresents + 1}

  default: return state

  }

}
