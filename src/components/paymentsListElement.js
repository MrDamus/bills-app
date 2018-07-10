import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';

const PaymentsListElement = ({ paymentDetails }) => (
  <div
    style={{ display: "flex", justifyContent: "" }}>
      {`
        Payment:  ${paymentDetails.type}, ${paymentDetails.amount}£, 
      `}
  </div>
)

const mapStateToProps = ({ user }) => ({
  amount: user.amount,
})

PaymentsListElement.propTypes = {
  paymentDetails: PropTypes.object.isRequired,
}

export default connect(mapStateToProps)(PaymentsListElement);
