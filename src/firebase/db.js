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

export const getGroup = (code) =>
  db.collection('groups')
    .where('referenceCode','==',code)
    .get()
    .then(resp => resp.docs[0]);

export const onceGetUsers = () =>
  db.collection('users').get();

export const addPayment = (amount, type, requestorId) =>
  db.collection(`payments`).add({
    amount,
    type,
    requestorId,
  });