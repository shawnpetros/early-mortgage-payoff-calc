import math from 'mathjs';
import './mathFormulas';

export const validateFields = (obj) => {
  let arr = Object.keys(obj);
  let len = arr.length;

  while (len--) {
    if (typeof obj[arr[len]] === 'object') {
      break;
    }
    if (isNaN(parseInt(obj[arr[len]], 10)) || parseInt(obj[arr[len]], 10) === '') {
      console.log(`${arr[len]} has value ${obj[arr[len]]}, which is invalid`);
      return false;
    }
  }

  return true;
};

export const mortgageComponentsBuilder = ({ homeCost, yearsBorrowed, mortgageInterest }) => {
  let bal = parseInt(homeCost);
  let int = 0;
  let pri = 0
  let per = 1;
  let n = yearsBorrowed * 12;
  let rate = mortgageInterest / 100 / 12;
  let interest = [];
  let principal = [];
  let balance = [];

  let pmt = Math.round10(monthlyPayment(homeCost, n, rate), -2);

  while (per <= n) {
    int = Math.round10(math.eval(`${math.bignumber(bal)} * ${math.bignumber(rate)}`, -2);
    pri = Math.round10(`${math.bignumber(pmt)} - ${math.bignumber(int)}`, -2);
    bal = Math.round10(`${math.bignumber(bal)} - ${math.bignumber(pri)}`, -2);

    interest.push(int);
    principal.push(pri);
    balance.push(bal);

    per++;
  }

  return {
    interest,
    principal,
    balance
  }
};

const monthlyPayment = (p, n, i) => {
  return math.eval(`${p} * ${i} * ((1 + ${i}) ^ ${n}) / ((1 + ${i}) ^ ${n} - 1)`);
};

export const getMortgagePayment = ({ homeCost, yearsBorrowed, mortgageInterest }) => {
  const P = homeCost;
  const I = math.eval(`${mortgageInterest} / 100 / 12`);
  const N = math.eval(`${yearsBorrowed} * 12`);

  return monthlyPayment(P, N, I);
};

export const principalPayments = ({ homeCost, yearsBorrowed, mortgageInterest }) => {
  let interestArr = [];
  let pv = homeCost;
  let rate = math.eval(`${mortgageInterest} / 100`);
  let periods = math.eval(`${yearsBorrowed} * 12`);
  let pmt = getMortgagePayment({ homeCost, yearsBorrowed, mortgageInterest });

  for (var per = 1; per <= periods; per++) {
    interestArr.push(interestPayment(pmt, rate, pv, per));
  }

  return interestArr;
};

export const interestPayment = (pmt, rate, pv, per) => {
  // pmt + (1+ir)^(n-1) *(pv * ir - pmt)
  return math.eval(`${pmt} + (1 + ${rate})^(${per} - 1) * (${pv} * ${rate} - ${pmt})`);
};

export const excelFormulas = {
  PMT: function(rate, nper, pv, fv, type) {
    if (!fv) fv = 0;
    if (!type) type = 0;

    if (rate === 0) return -(pv + fv)/nper;

    var pvif = math.eval(`1 + ${rate} ^ ${nper}`);
    var pmt = rate / (pvif - 1) * -(pv * pvif + fv);

    if (type === 1) {
      pmt /= (1 + rate);
    };

    return pmt;
  },

  IPMT: function(pv, pmt, rate, per) {
    var tmp = math.eval(`1 + ${rate} ^ ${per}`);
    return 0 - (pv * tmp * rate + pmt * (tmp - 1));
  }
};
