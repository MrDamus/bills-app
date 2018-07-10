const INITIAL_STATE = {
  userId: '',
  userPayments: [],
  groupPayments: []
}

const setUser = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        userId: action.payload,
      }
      case 'FETCH_USER_PAYMENTS_SUCCESS':
      return {
        ...state,
        userPayments: action.payload,
      }
      default:
        return state
    }
  }

export default setUser
