import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FormControl, ControlLabel, Button } from 'react-bootstrap';

const pendingPayments = ({ user }) => (
  <form onSubmit={event => event.preventDefault()} style={{display: 'flex', flexDirection: 'column'}}>
  <ControlLabel style={{textAlign: 'center', fontSize: '30px'}}>{'Pending payments'}</ControlLabel>
    {/* <FormGroup controlId="formControlsSelect"> */}
    
  {/* </FormGroup> */}
    <Button 
      bsStyle="success"
      block
      style={{maxWidth: '300px', alignSelf: 'center', marginTop: '10px'}}
      type="submit"
      // onClick={pendingPayments}
      >Confirm
    </Button>
</form>
);

const mapStateToProps = ({  }) => ({
})

pendingPayments.propTypes = {
};

export default connect(mapStateToProps)(pendingPayments);