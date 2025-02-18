// a reducer takes in 2 things:
//1: the action - (info about what happened)
//2: copy of current state

function posts(state = [], action) {
  switch (action.type) {
    case "INCREMENT_LIKES":
      console.log("incrementing likes");
      const i = action.index;
      //return the updated state
      return [
        ...state.slice(0, i), // befoere the one that we are updating
        { ...state[i], likes: state[i].likes + 1 },
        ...state.slice(i + 1), // after the one we are updating
      ];
    default:
      return state;
  }
  return state;
}

export default posts;
