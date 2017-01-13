import math from 'mathjs';

export const validateFields = (obj) => {
  let arr = Object.keys(obj);
  let len = arr.length;

  while (len--) {
    if (isNaN(parseInt(obj[arr[len]], 10)) || parseInt(obj[arr[len]], 10) === '') {
      console.log(`${arr[len]} has value ${obj[arr[len]]}, which is invalid`);
      return false;
    }
  }

  return true;
};

const monthlyPayment = (p, n, i) => {
  const payment = math.eval(`${p} * ${i} * ((1 + ${i}) ^ ${n}) / ((1 + ${i}) ^ ${n} - 1)`);
  const precision = 6;

  return math.format(payment, precision);
};

export const getMortgagePayment = ({ homeCost, yearsBorrowed, mortgageInterest }) => {
  const P = homeCost;
  const I = mortgageInterest / 100 / 12;
  const N = yearsBorrowed * 12;

  return monthlyPayment(P, N, I);
};
