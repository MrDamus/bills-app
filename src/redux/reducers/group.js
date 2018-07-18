const INITIAL_STATE = {
  groupName: '',
  userName: '',
  isInProgress: false,
  referenceCode: '',
  groupReferenceCode: ''
}

const addGroup = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CHANGE_GROUP_NAME':
      return {
        ...state,
        groupName: action.payload,
      }
      case 'CHANGE_USER_NAME':
      return {
        ...state,
        userName: action.payload,
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
        referenceCode: action.payload.referenceCode,
      }
      case 'ADD_GROUP_ERROR':
      return {
        ...state,
        isInProgress: false,
      }
      case 'CHANGE_GROUP_REFERENCE':
      return {
        ...state,
        groupReferenceCode: action.payload,
      }
      case 'JOIN_GROUP':
      return {
        ...state,
        isInProgress: true,
      }
      case 'JOIN_GROUP_SUCCESS':
      return {
        ...state,
        isInProgress: false,
        groupName: action.payload.name,
      }
      case 'JOIN_GROUP_ERROR':
      return {
        ...state,
        isInProgress: false,
      }
      case 'FETCH_GROUP_PAYMENTS_SUCCESS':
      return {
        ...state,
        groupPayments: action.payload,
      }
      default:
        return state
    }
  }

export default addGroup
