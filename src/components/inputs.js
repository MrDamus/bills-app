import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormControl, ControlLabel, Button } from 'react-bootstrap';
import PaymentActions from '../redux/actions';

const Inputs = ({ selectValue, amount, addPayment, selectType }) => (
  <form onSubmit={event => event.preventDefault()} style={{display: 'flex', flexDirection: 'column'}}>
    <ControlLabel style={{textAlign: 'center', fontSize: '30px'}}>{'Add top up'}</ControlLabel>
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
        onClick={addPayment}
        >Add payment
      </Button>
  </form>
);

const mapDispatchToProps = (dispatch) => {
  return {
    selectValue: (inputValue) => dispatch(PaymentActions.selectValue(inputValue)),
    selectType: (inputType) => dispatch(PaymentActions.selectType(inputType)),
    addPayment: () => dispatch(PaymentActions.addPayment()),
  }
}

const mapStateToProps = ({ amountPicker }) => ({
  amount: amountPicker.amount,
})

Inputs.propTypes = {
  selectValue: PropTypes.func,
  selectType: PropTypes.func,
  amount: PropTypes.number,
  addPayment: PropTypes.func,

};

Inputs.defaultProps = {
  selectValue: () => null,
  selectType: () => null,
  addPayment: () => null,
  amount: 1,
};

export default connect(mapStateToProps, mapDispatchToProps) (Inputs);
