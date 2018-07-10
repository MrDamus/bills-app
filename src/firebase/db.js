import { db } from './firebase';

// User API

export const createGroup = (name, referenceCode) =>
  db.collection(`groups`)
    .add({
    name,
    referenceCode,
  });

  export const createUser = (name, groupId) =>
  db.collection(`users`)
    .add({
    name,
    groupId,
  });

export const getGroup = (code) =>
  db.collection('groups')
    .where('referenceCode','==',code)
    .get()
    .then(resp => resp.docs[0]);

export const onceGetUsers = () =>
  db.collection('users')
    .get();

export const fetchUserPayments = (userId) =>
  db.collection('payments')
    .where('requestorId', '==',userId)
    .get();

export const fetchGroupPayments = async (userId) => {
  const userData = await db.collection('users')
    .doc(userId)
    .get();

  const { groupId } = userData.data();

  const groupUsers = await db.collection('users')
    .where('groupId', '==', groupId)
    .get();
  const groupUsersIds = groupUsers.docs.map(g => g.id)
  const groupPayments = []

  const requests = groupUsersIds.map(id => 
    db.collection('payments')
      .where('requestorId', '==', id)
      .get()
  );
  const paymentsDocuments = await Promise.all(requests)
  const paymentsData = paymentsDocuments.map(a => a.docs)
  const allRequests = [].concat(...paymentsData)
  const data = allRequests.map(d => d.data())
  return data
}

export const addPayment = (amount, type, requestorId) =>
  db.collection(`payments`)
    .add({
    amount,
    type,
    requestorId,
  });

  // export const approvePayment = (isApproved) =>
  // db.collection(`payments`)
  //   .add({
  //   isApproved,
  // });