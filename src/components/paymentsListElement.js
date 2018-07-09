import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const PaymentsListElement = ({ data }) => (
  <div key={data.date} style={{ display: "flex", justifyContent: "space-around" }}>
      {`
        your payment
      `}
  </div>
)

PaymentsListElement.propTypes = {
  data: PropTypes.object.isRequired
}

export default PaymentsListElement;
