import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import PaymentActions from '../redux/actions/payments';

const PaymentsListElement = ({ paymentDetails, approvePayment }) => (
  <div
    style={{ display: "flex", justifyContent: "center", flexDirection: '' }}>
      {`
        Payment:  ${paymentDetails.type}, ${paymentDetails.amount}£  
      `}
      <p>ID: {paymentDetails.requestorId}</p>
      <Button
        bsStyle="success"
        block
        style={{maxWidth: '300px'}}
        type="submit"
        onClick={approvePayment}
        >Approve payment
      </Button>  
    </div>
)

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    approvePayment: (id) => dispatch(PaymentActions.approvePayment(id))
    .then(() => history.push('/pendingPayments'))
    .catch(e => console.warn(e))}
}

const mapStateToProps = ({ user }) => ({
  amount: user.amount,
})

PaymentsListElement.propTypes = {
  paymentDetails: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(PaymentsListElement);
