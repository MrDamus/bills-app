import GroupService from "../services/groupService";
import { db } from '../../firebase';

export const changeGroupName = (payload) => ({
  type: 'CHANGE_GROUP_NAME',
  payload
})

export const changeUserName = (payload) => ({
  type: 'CHANGE_USER_NAME',
  payload
})

export function addGroup() {
  return function (dispatch, getState) {
    dispatch(() => ({type: 'ADD_GROUP'}))
    const { groupName, userName }  = getState().group;
    const referenceCode = Math.random().toString(36).slice(6);
    return db.createGroup(groupName, referenceCode)
    .then(resp => db.createUser(userName, resp.id))
    .then(resp => {
      dispatch(addGroupSuccess({resp, referenceCode}));
    },
      error => {
        dispatch(addGroupError(error))
        throw new Error(error)
      }
    );
  };
}

export function joinGroup() {
  return function(dispatch, getState) {
    dispatch(() => ({type: 'JOIN_GROUP'}));
    const { groupReferenceCode, userName }  = getState().group;
    return db.getGroup(groupReferenceCode)
    .then(resp => {
      db.createUser(userName, resp.id)
      return resp.data()
    })
    .then(data => {
      dispatch(joinGroupSuccess(data));
    },
      error => {
        dispatch(joinGroupError(error))
        throw new Error(error)
      }
    );
  }
}

export const addGroupSuccess = (payload) => ({
  type: 'ADD_GROUP_SUCCESS',
  payload
})

export const changeGroupReference = (payload) => ({
  type: 'CHANGE_GROUP_REFERENCE',
  payload
})

export const addGroupError = (payload) => ({
  type: 'ADD_GROUP_ERROR',
  payload
})

export const joinGroupSuccess = (payload) => ({
  type: 'JOIN_GROUP_SUCCESS',
  payload
})

export const joinGroupError = (payload) => ({
  type: 'JOIN_GROUP_ERROR',
  payload
})

export default {
  changeGroupName,
  changeUserName,
  addGroup,
  addGroupSuccess,
  changeGroupReference,
  joinGroup
}
