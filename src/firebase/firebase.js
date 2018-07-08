import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { config } from './config'


if (!firebase.apps.length) {
  firebase.initializeApp(config);
  firebase.auth().signInAnonymously()
  .then(() => {
    console.warn('Anonymous User registered')
  })
  .catch(error => {
    console.warn(error);
  })
}

const db = firebase.firestore();
const auth = firebase.auth();

export {
  db,
  auth,
};
