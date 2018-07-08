const INITIAL_STATE = {
  groupName: '',
  adminName: '',
  isInProgress: false,
}

const addGroup = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CHANGE_GROUP_NAME':
      return {
        ...state,
        groupName: action.payload,
      }
      case 'CHANGE_ADMIN_NAME':
      return {
        ...state,
        adminName: action.payload,
      }
      case 'ADD_GROUP':
      return {
        ...state,
        isInProgress: true,
      }
      case 'ADD_GROUP_SUCCESS':
      return {
        ...state,
        isInProgress: false,
      }
      case 'ADD_GROUP_ERROR':
      return {
        ...state,
        isInProgress: false,
      }
      default:
        return state
    }
  }

export default addGroup
