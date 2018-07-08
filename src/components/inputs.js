import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormControl, ControlLabel, InputGroup, Button } from 'react-bootstrap';
import PickerActions from '../redux/actions';

const Inputs = ({ selectValue, amount, addTopup, selectType }) => (
  <form onSubmit={event => event.preventDefault()} style={{display: 'flex', flexDirection: 'column'}}>
    <ControlLabel style={{textAlign: 'center', fontSize: '30px'}}>{'Add top up'}</ControlLabel>
      {/* <FormGroup controlId="formControlsSelect"> */}
      <ControlLabel>Select type </ControlLabel>
      <FormControl
        componentClass="select"
        placeholder="select"
        onChange={e => selectType(e.target.value)}
        style={{alignSelf: 'center'}}
      >
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
        style={{maxWidth: '300px', alignSelf: 'center', marginTop: '10px'}}
        type="submit"
        onClick={addTopup}
        >Confirm
      </Button>
  </form>
);

const mapDispatchToProps = (dispatch) => {
  return {
    selectValue: (inputValue) => dispatch(PickerActions.selectValue(inputValue)),
    selectType: (inputValue) => dispatch(PickerActions.selectType(inputValue)),
    addTopup: () => dispatch(PickerActions.addTopup()),
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
