import { db } from './firebase';

// User API

export const createGroup = (name, referenceCode) =>
  db.collection(`groups`).add({
    name,
    referenceCode,
  });

  export const createUser = (name, groupId) =>
  db.collection(`users`).add({
    name,
    groupId,
  });

export const onceGetUsers = () =>
  db.collection('users').get();