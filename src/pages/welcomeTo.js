import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { FormControl, ControlLabel, Button } from 'react-bootstrap';

const welcomeTo = ({ groupName, history }) => (
  <div>
    Welcome To Group : {groupName}
    <Button
      bsStyle="success"
      block
      style={{maxWidth: '300px', alignSelf: 'center', marginTop: '10px'}}
      type="submit"
      onClick={() => history.push('/home')}
      >Go to home page
    </Button>
  </div>
);

const mapStateToProps = ({ group }) => ({
  groupName: group.groupName,
})

welcomeTo.propTypes = {
  history: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(welcomeTo);