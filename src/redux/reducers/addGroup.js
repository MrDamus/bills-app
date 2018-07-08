const INITIAL_STATE = {
  groupName: '31Harehill',
  adminName: 'Jacek'
}

const addGroup = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GROUP_NAME':
      return {
        ...state,
        groupName: action.payload,
      }
      case 'ADMIN_NAME':
      return {
        ...state,
        adminName: action.payload,
      }
      default:
        return state
    }
  }

export default addGroup
