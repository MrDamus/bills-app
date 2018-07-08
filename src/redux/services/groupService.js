import { db } from '../../firebase';

function createGroup(name) {
  console.log(name)
  return db.doCreateUser
}

export default {
  createGroup
}