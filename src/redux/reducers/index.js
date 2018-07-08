import { combineReducers } from 'redux'
import amountPicker from './amountPicker'
import deal from './deal'
import group from './group';
import user from './user';

export default combineReducers({
  amountPicker,
  deal,
  group,
  user
});
