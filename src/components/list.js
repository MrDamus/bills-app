import React from 'react';
import PropTypes from 'prop-types';
import PaymentsListElement from './paymentsListElement'

const List = ({ data }) => (
  <div className="paymentsList" style={{ display: "flex", flexDirection: "column" }}>
    <h3 style={{ alignSelf: 'center' }}>Payments History</h3>
    <ul style={{ display: "flex", flexDirection: "column" }}>
      {data
        ? data.map(payment => <PaymentsListElement key={data.date} data={payment} />)
        : null
      }
    </ul>
  </div>
);

List.propTypes = {
  data: PropTypes.array
};

export default List;
