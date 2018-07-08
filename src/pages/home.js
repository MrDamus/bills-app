import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ControlLabel, Button } from 'react-bootstrap';


const HomePage = ({ user }) => (
  <form onSubmit={event => event.preventDefault()} style={{display: 'flex', flexDirection: 'column'}}>
  <ControlLabel style={{textAlign: 'center', fontSize: '30px'}}>{'Choose your destiny:'}</ControlLabel>
    <Button 
      bsStyle="success"
      block
      style={{maxWidth: '300px', alignSelf: 'center', marginTop: '10px'}}
      type="submit"
      // onClick={join}
      >Join Group
    </Button>
    <Button 
      bsStyle="success"
      block
      style={{maxWidth: '300px', alignSelf: 'center', marginTop: '10px'}}
      type="submit"
      // onClick={create}
      >Create Group
    </Button>
</form>
);

const mapStateToProps = ({  }) => ({
})

HomePage.propTypes = {
};

export default connect(mapStateToProps)(HomePage);