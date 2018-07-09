import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserActions from '../redux/actions/user';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

class AppHeader extends Component {

componentDidMount() {
  if (!this.props.userId) {
    const userId = localStorage.getItem('userId');
    if (typeof userId === 'string') {
      try {
        this.props.setUser(userId)
        this.props.history.push('/home')
      } catch (err) {
        console.log(err)
      }
    }
  }
}
  render() {
    return (
    <header className="App-header">
      <h1 className="App-title">{this.props.title}</h1>
    </header>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  userId: user.userId,
})

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    setUser: (id) => dispatch(UserActions.setUser(id))
  }
}

AppHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AppHeader));
