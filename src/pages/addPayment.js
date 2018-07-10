import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Inputs from '../components/inputs'
import transaction from '../redux/reducers/transaction';

const addPayment = ({ message }) => (
  <div>
    <Inputs/>
    <p key="message">{message}</p>
  </div>
);

const mapStateToProps = ({ transaction }) => ({
  message: transaction.message,
})

addPayment.propTypes = {
  message: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(addPayment);
