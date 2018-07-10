import { combineReducers } from 'redux'
import amountPicker from './amountPicker'
import transaction from './transaction'
import group from './group';
import user from './user';

export default combineReducers({
  amountPicker,
  transaction,
  group,
  user
});
