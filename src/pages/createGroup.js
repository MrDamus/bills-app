import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GroupActions from '../redux/actions/group';

import { FormControl, ControlLabel, Button } from 'react-bootstrap';

const createGroup = ({ changeUserName, changeGroupName, createGroupRequest}) => (
  <form onSubmit={event => event.preventDefault()} style={{display: 'flex', flexDirection: 'column'}}>
  <ControlLabel style={{textAlign: 'center', fontSize: '30px'}}>{'Create group'}</ControlLabel>
    <FormControl
      style={{ width: '15%', minWidth:'100px', alignSelf: 'center', textAlign: 'center'}}
      autoFocus
      type="text"
      placeholder="Admin name"
      required
      onChange={e => changeUserName(e.target.value)}
    />
    <FormControl
      style={{ width: '15%', minWidth:'100px', alignSelf: 'center', textAlign: 'center'}}
      autoFocus
      type="text"
      placeholder="Group name"  
      required
      onChange={e => changeGroupName(e.target.value)}
    />
    <Button 
      bsStyle="success"
      block
      style={{maxWidth: '300px', alignSelf: 'center', marginTop: '10px'}}
      type="submit"
      onClick={createGroupRequest}
      >Confirm
    </Button>
</form>
);

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    changeUserName: (name) => dispatch(GroupActions.changeUserName(name)),
    changeGroupName: (inputValue) => dispatch(GroupActions.changeGroupName(inputValue)),
    createGroupRequest: () => dispatch(GroupActions.addGroup())
      .then(() => history.push('/groupCreated'))
      .catch(e => console.warn(e)),
  }
}

createGroup.propTypes = {
  changeUserName: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(createGroup);