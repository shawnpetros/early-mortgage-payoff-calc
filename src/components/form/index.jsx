import React from 'react';
import './form.css';

export default () => (
  <div>
    <input type='text' value='55000' placeholder='Base Salary' />
    <input type='text' value='30' placeholder='Taxes and Deductions Ratio' />
    <input type='text' value='70' placeholder='Savings Rate' />
    <input type='text' value='150000' placeholder='Home Cost' />
    <input type='text' value='15' placeholder='Years in Mortgage' />
    <input type='text' value='2.8' placeholder='Interest Rate on Mortgage' />
    <input type='text' value='8' placeholder='Investment Rate' />
  </div>
);
