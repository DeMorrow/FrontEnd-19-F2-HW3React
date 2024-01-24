const initialState = {
    isCount: 0
}

const reducer = (state = initialState, { type, payload }) => {  
  switch (type) {

  case 'RANDOM_NUMBER':
    return { ...state, isCount: Math.floor(Math.random() * (50 - 0)) }
  case 'NEGATIVE_RAN_NUMBER':
    return { ...state, isCount: Math.floor(-1 * (Math.random() * (50 - 0))) }
  default:
    return state
  }
}

export default reducer;
