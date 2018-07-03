import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, FormControl, ControlLabel, InputGroup } from 'react-bootstrap';
import Calendar from 'react-input-calendar'

const Inputs = ({ name, inputValue, selectValue }) => (
  <FormGroup controlId={name} bsSize="large" style={{ display: 'flex', flexDirection: 'column', alignSelf: 'center' }}>
    <ControlLabel style={{textAlign: 'center'}}>{name} </ControlLabel>
    <InputGroup>
      {/* <FormGroup controlId="formControlsSelect"> */}
      <ControlLabel>Select type</ControlLabel>
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
        max={100000}
        required
        value='0'
        onChange={e => selectValue(e.target.value)}
      />
    <Calendar format='DD/MM/YYYY' date='3-6-2018' />
    </InputGroup>
  </FormGroup>
);


Inputs.propTypes = {
  name: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Inputs;