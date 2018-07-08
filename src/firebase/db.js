import { db } from './firebase';

// User API

export const doCreateUser = (username, email) =>
  db.collection(`users`).add({
    username,
    email,
  });

export const onceGetUsers = () =>
  db.collection('users').get();