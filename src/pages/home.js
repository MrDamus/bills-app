import React from 'react';
import PropTypes from 'prop-types';
import { ControlLabel, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import PaymentActions from '../redux/actions/payments';

const Home = ({ history, fetchPayments }) => (
  <form onSubmit={event => event.preventDefault()} style={{display: 'flex', flexDirection: 'column'}}>
  <ControlLabel style={{textAlign: 'center', fontSize: '30px'}}>{'Choose your destiny:'}</ControlLabel>
    <Button
      bsStyle="success"
      block
      style={{maxWidth: '300px', alignSelf: 'center', marginTop: '10px'}}
      type="submit"
      onClick={fetchPayments}
      >Pending payments
    </Button>
    <Button
      bsStyle="success"
      block
      style={{maxWidth: '300px', alignSelf: 'center', marginTop: '10px'}}
      type="submit"
      onClick={() => history.push('/addPayment')}
      >Add payment
    </Button>
</form>
);

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    fetchPayments: (id) => dispatch(PaymentActions.fetchUserPayments(id))
    .then(() => history.push('/pendingPayments'))
    .catch(e => console.warn(e)),  }
}

Home.propTypes = {
  history: PropTypes.object.isRequired,
};

export default connect(null, mapDispatchToProps)(Home);
