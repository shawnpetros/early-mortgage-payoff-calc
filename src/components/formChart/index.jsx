import React from 'react';
import Form from '../form/';
import Chart from '../chart/';
import './chart.css';

export default ({ state , handleChange }) => {
  return <div className='form-chart'>
    <Form state={ state } handleChange={handleChange} />
    <Chart state={ state } />
  </div>
};
