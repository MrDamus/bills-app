// nazwa, zmiana nazwy grupy, zmiana nazwy admina, submit , submit group erorr i success

import GroupService from "../services/groupService";
import { db } from '../../firebase';

export const changeGroupName = (payload) => ({
  type: 'CHANGE_GROUP_NAME',
  payload
})

export const changeAdminName = (payload) => ({
  type: 'CHANGE_ADMIN_NAME',
  payload
})

export function addGroup() {
  return function (dispatch, getState) {
    dispatch(() => ({type: 'ADD_GROUP'}))
    const { groupName, adminName }  = getState().group;
    const referenceCode = Math.random().toString(36).slice(6);
    return db.createGroup(groupName, referenceCode)
    .then(resp => db.createUser(adminName, resp.id))
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
    dispatch(() => ({type: 'JOIN_GROUP'}))
  }
}

export const addGroupSuccess = (payload) => ({
  type: 'ADD_GROUP_SUCCESS',
  payload
})

export const addGroupError = (payload) => ({
  type: 'ADD_GROUP_ERROR',
  payload
})

export default {
  changeGroupName,
  changeAdminName,
  addGroup,
  addGroupSuccess
}
