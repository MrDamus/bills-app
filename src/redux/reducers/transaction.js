const INITIAL_STATE = {
  payment: [],
  message: ""
}

const transaction = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_PAYMENT_SUCCESS':
      return {
        ...state,
        payment: action.payload,
        message: 'You have added your payment successfully'
      }
    default:
      return state
  }
}

export default transaction