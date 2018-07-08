import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FormControl, ControlLabel, Button } from 'react-bootstrap';

const addUser = ({ user }) => (
  <form onSubmit={event => event.preventDefault()} style={{display: 'flex', flexDirection: 'column'}}>
  <ControlLabel style={{textAlign: 'center', fontSize: '30px'}}>{'Create account'}</ControlLabel>
    {/* <FormGroup controlId="formControlsSelect"> */}
    <FormControl
      style={{ width: '15%', minWidth:'100px', alignSelf: 'center', textAlign: 'center'}}
      autoFocus
      type="text"
      placeholder="Name"
      required
      value={''}
      // onChange={e => changeUsername(e.target.value)}
    />
  {/* </FormGroup> */}
    <Button 
      bsStyle="success"
      block
      style={{maxWidth: '300px', alignSelf: 'center', marginTop: '10px'}}
      type="submit"
      // onClick={addUser}
      >Confirm
    </Button>
</form>
);

const mapStateToProps = ({  }) => ({
})

addUser.propTypes = {
};

export default connect(mapStateToProps)(addUser);