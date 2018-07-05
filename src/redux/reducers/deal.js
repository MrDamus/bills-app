const INITIAL_STATE = {
  topUp: []
}

const deal = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_TOPUP':
      return {
        ...state,
        topUp: action.payload
      }
    default:
      return state
  }
}

export default deal