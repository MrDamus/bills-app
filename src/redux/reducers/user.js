const INITIAL_STATE = {
  userId: '',
}

const setUser = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        userId: action.payload,
      }
      default:
        return state
    }
  }

export default setUser
