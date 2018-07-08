import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GroupActions from '../redux/actions/group';

import { FormControl, ControlLabel, Button } from 'react-bootstrap';

const joinGroup = ({ joinGroupRequest, changeGroupReference }) => (
  <form onSubmit={event => event.preventDefault()} style={{display: 'flex', flexDirection: 'column'}}>
  <ControlLabel style={{textAlign: 'center', fontSize: '30px'}}>{'Join group'}</ControlLabel>
    {/* <FormGroup controlId="formControlsSelect"> */}
    <FormControl
      style={{ width: '15%', minWidth:'100px', alignSelf: 'center', textAlign: 'center'}}
      autoFocus
      type="text"
      placeholder="Group reference code"
      required
      onChange={e => changeGroupReference(e.target.value)}
    />
  {/* </FormGroup> */}

    <Button 
      bsStyle="success"
      block
      style={{maxWidth: '300px', alignSelf: 'center', marginTop: '10px'}}
      type="submit"
      onClick={joinGroupRequest}
      >Join
    </Button>
</form>
);

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    changeGroupReference: (adminName) => dispatch(GroupActions.changeGroupReference(adminName)),
    joinGroupRequest: () => dispatch(GroupActions.joinGroup())
      .then(() => history.push('/joinGroup')),
  }
}

joinGroup.propTypes = {
};

export default connect(null, mapDispatchToProps)(joinGroup);