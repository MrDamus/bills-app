const INITIAL_STATE = {
  amount: 0
}

const amountPicker = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SELECT_VALUE':
      return {
        ...state,
        amount: action.payload
      }
    default:
      return state
  }
}

export default amountPicker