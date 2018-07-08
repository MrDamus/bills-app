import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Inputs from '../components/inputs'

const addPayment = ({ user }) => (
      <Inputs/>
    );

const mapStateToProps = ({ userData }) => ({
  // user: userData.user,
})

addPayment.propTypes = {
  // user: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(addPayment);