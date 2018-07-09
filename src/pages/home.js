import React from 'react';
import PropTypes from 'prop-types';
import { ControlLabel, Button } from 'react-bootstrap';


const Home = ({ history }) => (
  <form onSubmit={event => event.preventDefault()} style={{display: 'flex', flexDirection: 'column'}}>
  <ControlLabel style={{textAlign: 'center', fontSize: '30px'}}>{'Choose your destiny:'}</ControlLabel>
    <Button
      bsStyle="success"
      block
      style={{maxWidth: '300px', alignSelf: 'center', marginTop: '10px'}}
      type="submit"
      onClick={() => history.push('/pendingPayments')}
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

Home.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Home;