import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FormControl, ControlLabel, InputGroup, Button } from 'react-bootstrap';


const createGroup = ({ user }) => (
  <form onSubmit={event => event.preventDefault()} style={{display: 'flex', flexDirection: 'column'}}>
  <ControlLabel style={{textAlign: 'center', fontSize: '30px'}}>{'Add top up'}</ControlLabel>
    {/* <FormGroup controlId="formControlsSelect"> */}
    <ControlLabel>Select type </ControlLabel>
    <FormControl
      style={{ width: '15%', minWidth:'100px', alignSelf: 'center', textAlign: 'center'}}
      autoFocus
      type="text"
      placeholder="Username"
      required
      value={''}
      // onChange={e => changeUsername(e.target.value)}
    />
  {/* </FormGroup> */}
    <FormControl
      style={{ width: '15%', minWidth:'100px', alignSelf: 'center', textAlign: 'center'}}
      autoFocus
      type="text"
      placeholder="Group name"  
      required
      value={'amount'}
      // onChange={e => selectValue(e.target.value)}
    />
    <Button 
      bsStyle="success"
      block
      style={{maxWidth: '300px', alignSelf: 'center', marginTop: '10px'}}
      type="submit"
      // onClick={addTopup}
      >Confirm
    </Button>
</form>
);

const mapStateToProps = ({  }) => ({
})

createGroup.propTypes = {
};

export default connect(mapStateToProps)(createGroup);