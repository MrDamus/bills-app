import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormGroup, FormControl, ControlLabel, InputGroup, Button } from 'react-bootstrap';
import { selectValue } from '../redux/actions';
import { addTopup } from '../redux/actions/addTopup'


const Inputs = ({ name, selectValue, amount, addTopup }) => (
  <FormGroup controlId={name} bsSize="large" style={{ display: 'flex', flexDirection: 'column', alignSelf: 'center' }}>
    <ControlLabel style={{textAlign: 'center'}}>{name} </ControlLabel>
    <InputGroup>
      {/* <FormGroup controlId="formControlsSelect"> */}
      <ControlLabel>Select type </ControlLabel>
      <FormControl componentClass="select" placeholder="select">
        <option value="Electricity">Electricity</option>
        <option value="Gas">Gas</option>
      </FormControl>
    {/* </FormGroup> */}
      <FormControl
        style={{ width: '15%', minWidth:'100px', alignSelf: 'center', textAlign: 'center'}}
        autoFocus
        type="number"
        placeholder="quantity"  
        min={0}
        max={100}
        required
        value={amount}
        onChange={e => selectValue(e.target.value)}
      />
      <Button 
        bsStyle="success"
        block
        type="submit"
        onClick={addTopup}
        >Confirm

      </Button>
    </InputGroup>
  </FormGroup>
);

const mapDispatchToProps = (dispatch) => {
  return {
    selectValue: (user) => dispatch(selectValue(user)),
  }
}

const mapStateToProps = ({ amountPicker }) => ({
  amount: amountPicker.amount,
})

Inputs.propTypes = {
  selectValue: PropTypes.func,
};

Inputs.defaultProps = {
  amount: 0,
  price: 0,
  selectValue: () => null,
  buyStock: () => null,
};

export default connect(mapStateToProps, mapDispatchToProps) (Inputs);
