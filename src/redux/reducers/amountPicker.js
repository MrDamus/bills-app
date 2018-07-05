const INITIAL_STATE = {
  amount: 0,
  type: ' '
}

const amountPicker = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SELECT_VALUE':
      return {
        ...state,
        amount: action.payload
      }
    case 'SELECT_TYPE':
      return {
        ...state,
        type: action.payload
      }
    default:
      return state
  }
}

export default amountPicker