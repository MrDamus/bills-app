import { db } from '../../firebase';

export function addPayment() {
  return function(dispatch, getState) {
    dispatch(({type: 'JOIN_GROUP'}));
    const { amount, type } = getState().amountPicker;
    const { userId } = getState().user;
    return db.addPayment(amount, type, userId)
    .then(data => {
      dispatch(addPaymentSuccess(data));
    },
      error => {
        dispatch(addPaymentError(error))
        throw new Error(error)
      }
    );
  }
}

export const addPaymentSuccess = (payload) => ({
  type: 'ADD_PAYMENT_SUCCESS',
  payload
})

export const addPaymentError = (payload) => ({
  type: 'ADD_PAYMENT_ERROR',
  payload
})

export function fetchUserPayments() {
  return function(dispatch, getState) {
    dispatch(({type: 'FETCH_USER_PAYMENTS'}));
    const { userId } = getState().user;
    return db.fetchGroupPayments(userId)
    .then(data => {
      dispatch(fetchUserPaymentsSuccess(data));
    },
      error => {
        dispatch(fetchUserPaymentsError(error))
        throw new Error(error)
      }
    );
  }
}

export const fetchUserPaymentsSuccess = (payload) => ({
  type: 'FETCH_USER_PAYMENTS_SUCCESS',
  payload
})

export const fetchUserPaymentsError = (payload) => ({
  type: 'FETCH_USER_PAYMENTS_ERROR',
  payload
})

// export function approvePayment() {
//   return function(dispatch, getState) {
//     dispatch(({type: 'APPROVE_PAYMENT'}));
//     const { userId } = getState().user;
//     return db.approvePayment(userId)
//     .then(data => {
//       dispatch(approvePaymentSuccess(data.docs.map(d => d.data())));
//     },
//       error => {
//         dispatch(approvePaymentError(error))
//         throw new Error(error)
//       }
//     );
//   }
// }

// export const approvePaymentSuccess = (payload) => ({
//   type: 'APPROVE_PAYMENT_SUCCESS',
//   payload
// })

// export const approvePaymentError = (payload) => ({
//   type: 'APPROVE_PAYMENT_ERROR',
//   payload
// })

export default {
  addPayment,
  fetchUserPayments,
  // approvePayment
}
