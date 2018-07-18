import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const groupCreated = ({ referenceCode, history }) => (
  <div>
    <h2>Group created</h2>
    <h3>
      Reference code: {referenceCode}

    </h3>
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
  referenceCode: group.referenceCode,
})

const mapDispatchToProps = (dispatch, { history }) => {
  return {
  }
}

groupCreated.propTypes = {
  history: PropTypes.object.isRequired,
  referenceCode: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(groupCreated);