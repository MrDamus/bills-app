import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { FormControl, ControlLabel, Button } from 'react-bootstrap';

const welcomeTo = ({ changeGroupName, welcomeToRequest }) => (
  <div>
    {/* ${groupName} */}
  </div>
);

const mapDispatchToProps = (dispatch, { history }) => {
  return {
  //   changeGroupName: (inputValue) => dispatch(GroupActions.changeGroupName(inputValue)),
  //   welcomeToRequest: () => dispatch(GroupActions.addGroup())
  //     .then(() => history.push('/groupReference')),
  }
}

welcomeTo.propTypes = {
};

export default connect(null, mapDispatchToProps)(welcomeTo);