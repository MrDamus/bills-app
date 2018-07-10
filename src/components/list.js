import React from 'react';
import PropTypes from 'prop-types';
import PaymentsListElement from './paymentsListElement'
import { connect } from 'react-redux';

const List = ({ userPayments, payment }) => (
  <div className="paymentsList" style={{ display: "flex", flexDirection: "column" }}>
    <h3 style={{ alignSelf: 'center' }}>Payments History</h3>
    <ul style={{ display: "flex", flexDirection: "column" }}>
      {userPayments
        ? userPayments.map((payment, i) => <PaymentsListElement key={i} paymentDetails={payment} />)
        : null
      }
    </ul>
  </div>
);

const mapStateToProps = ({ transaction, user }) => ({
  payment: transaction.payment,
  userPayments: user.userPayments
})

List.propTypes = {
  userPayments: PropTypes.array
};

export default connect(mapStateToProps)(List);
