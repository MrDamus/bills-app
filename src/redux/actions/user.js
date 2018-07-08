import GroupService from "../services/groupService";
import { db } from '../../firebase';

export const setUser = (payload) => ({
  type: 'SET_USER',
  payload
})

export default {
  setUser,
}
