import React from 'react';
import TextField from 'material-ui/TextField';
import './form.css';

export default ({state, handleChange}) => {
  const {
    salary,
    taxRatio,
    saveRate,
    homeCost,
    yearsBorrowed,
    mortgageInterest,
    investmentRate
  } = state;

  return <form>
    <TextField id='salary' value={salary} onChange={handleChange} hintText='Base Salary' floatingLabelText='Base Salary' />
    <TextField id='taxRatio' value={taxRatio} onChange={handleChange} hintText='Taxes and Deductions Ratio' floatingLabelText='Taxes and Deductions Ratio' />
    <TextField id='saveRate' value={saveRate} onChange={handleChange} hintText='Savings Rate' floatingLabelText='Savings Rate' />
    <TextField id='homeCost' value={homeCost} onChange={handleChange} hintText='Home Cost' floatingLabelText='Home Cost' />
    <TextField id='yearsBorrowed' value={yearsBorrowed} onChange={handleChange} hintText='Years in Mortgage' floatingLabelText='Years in Mortgage' />
    <TextField id='mortgageInterest' value={mortgageInterest} onChange={handleChange} hintText='Interest Rate on Mortgage' floatingLabelText='Interest Rate on Mortgage' />
    <TextField id='investmentRate' value={investmentRate} onChange={handleChange} hintText='Investment Rate' floatingLabelText='Investment Rate' />
  </form>;
}
