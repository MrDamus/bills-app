import { db } from '../../firebase';

export const selectValue = (payload) => ({
  type: 'SELECT_VALUE',
  payload
})

export const selectType = (payload) => ({
  type: 'SELECT_TYPE',
  payload
})

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
    return db.fetchUserPayments(userId)
    .then(data => {
      dispatch(fetchPaymentSuccess(data));
    },
      error => {
        dispatch(fetchPaymentError(error))
        throw new Error(error)
      }
    );
  }
}

export const fetchPaymentSuccess = (payload) => ({
  type: 'ADD_PAYMENT_SUCCESS',
  payload
})

export const fetchPaymentError = (payload) => ({
  type: 'ADD_PAYMENT_ERROR',
  payload
})

export default {
  selectValue,
  selectType,
  addPayment,
  fetchUserPayments,
}