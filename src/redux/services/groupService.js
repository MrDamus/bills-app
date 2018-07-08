import { SERVER_URL, ENDPOINTS } from '../../config'
import { db } from '../../firebase';

function createGroup(name) {
  console.log(name)
  return db.doCreateUser
}

export default {
  createGroup
}