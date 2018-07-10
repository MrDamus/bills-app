import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FormControl, ControlLabel, Button } from 'react-bootstrap';
import List from '../components/list'

const pendingPayments = ({ history, data }) => (
  <form onSubmit={event => event.preventDefault()} style={{display: 'flex', flexDirection: 'column'}}>
  <ControlLabel style={{textAlign: 'center', fontSize: '30px'}}>{'Pending payments'}</ControlLabel>
  <List items={data}/>
    <Button 
      bsStyle="success"
      block
      style={{maxWidth: '300px', alignSelf: 'center', marginTop: '10px'}}
      type="submit"
      // onClick={() => history.push('/home')}
      >Confirm
    </Button>
</form>
);

const mapStateToProps = ({  }) => ({
})

pendingPayments.propTypes = {
};

export default connect(mapStateToProps)(pendingPayments);