import GroupService from "../services/groupService";
import { db } from '../../firebase';


export function setUser(userId) {
  return function(dispatch, getState) {
    dispatch(() => ({type: 'SET_USER', payload: userId}));
    localStorage.setItem('userId', JSON.stringify(userId))
  }
}


export default {
  setUser,
}
