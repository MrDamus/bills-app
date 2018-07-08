// nazwa, zmiana nazwy grupy, zmiana nazwy admina, submit , submit group erorr i success

import createGroup from "../services/createGroup";

export const groupName = (payload) => ({
  type: 'GROUP_NAME',
  payload
})

export const adminName = (payload) => ({
  type: 'ADMIN_NAME',
  payload
})

export const changeGroupName = (payload) => ({
  type: 'CHANGE_GROUP_NAME',
  payload
})

export const changeAdminName = (payload) => ({
  type: 'CHANGE_ADMIN_NAME',
  payload
})
export const addGroup = (payload) => ({
  type: 'ADD_GROUP',
  payload
})

export const addGroupSuccess = (payload) => ({
  type: 'ADD_GROUP_SUCCESS',
  payload
})

export const addGroupError = (payload) => ({
  type: 'ADD_GROUP_ERROR',
  payload
})
