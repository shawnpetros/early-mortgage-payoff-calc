import React from 'react';
import Form from '../form/';
import Chart from '../chart/';
import './chart.css';

export default ({ state , handleChange, mortgageComponents }) => {
  return <div className='form-chart'>
    <Form state={state} handleChange={handleChange} />
    <Chart data={mortgageComponents} />
  </div>
};
