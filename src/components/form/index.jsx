import React from 'react';
import TextField from 'material-ui/TextField';
import './form.css';

export default () => (
  <form>
    <TextField hintText='Base Salary' floatingLabelText='Base Salary' />
    <TextField hintText='Taxes and Deductions Ratio' floatingLabelText='Taxes and Deductions Ratio' />
    <TextField hintText='Savings Rate' floatingLabelText='Savings Rate' />
    <TextField hintText='Home Cost' floatingLabelText='Home Cost' />
    <TextField hintText='Years in Mortgage' floatingLabelText='Years in Mortgage' />
    <TextField hintText='Interest Rate on Mortgage' floatingLabelText='Interest Rate on Mortgage' />
    <TextField hintText='Investment Rate' floatingLabelText='Investment Rate' />
  </form>
);
