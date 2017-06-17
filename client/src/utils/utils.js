import BigNumber from 'bignumber';

console.log(BigNumber);

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

export const monthlyPayment = ({ homeCost, yearsBorrowed, mortgageInterest }) => {
  return finance.AM(homeCost, mortgageInterest, yearsBorrowed, 0);
};

export const mortgageComponentsBuilder = ({ homeCost, yearsBorrowed, mortgageInterest }) => {
  let bal = homeCost;
  let int = 0;
  let pri = 0
  let per = 1;
  let n = yearsBorrowed * 12;
  let rate = Decimal(mortgageInterest).div(100).div(12);
  let intAccrued = Decimal(0);
  let paymentTotals = Decimal(0);
  let interest = [];
  let principal = [];
  let balance = [];

  let pmt = monthlyPayment({ homeCost, yearsBorrowed, mortgageInterest });

  while (per <= n) {
    int = Decimal(bal).mul(rate).toDP(2, 4);
    pri = Decimal(pmt).sub(int).toDP(2, 4);
    bal = Decimal(bal).sub(pri).toDP(2, 4);

    intAccrued = intAccrued.add(int).toDP(2, 4);
    paymentTotals = paymentTotals.add(pmt).toDP(2, 4);

    interest.push(intAccrued.toNumber());
    principal.push(paymentTotals.toNumber());
    balance.push(bal.toNumber() > 0 ? bal.toNumber() : 0);

    per++;
  }

  return {
    interest,
    principal,
    balance
  }
};

/**
 * Formats a number string to have correct comma placement.
 * @param  {String or Number} input => A number string.
 * @return {String}       A number string with commas in the correct places.
 */
export const fixCommas = function(input) {
	let parts;

	input = input.toString();

	input = input.replace(/[,\s]/g, '');

	parts = input.toString().split('.');

	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

	return parts.join('.');
};

// export const getMortgagePayment = ({ homeCost, yearsBorrowed, mortgageInterest }) => {
//   const P = Decimal(homeCost);
//   const I = Decimal(mortgageInterest).div(100).div(12);
//   const N = Decimal(yearsBorrowed).mul(12);
//
//   return monthlyPayment(P, N, I);
// };

// export const principalPayments = ({ homeCost, yearsBorrowed, mortgageInterest }) => {
//   let interestArr = [];
//   let pv = homeCost;
//   let rate = Decimal(mortgageInterest).div(100);
//   let periods = Decimal(yearsBorrowed).mul(12);
//   let pmt = getMortgagePayment({ homeCost, yearsBorrowed, mortgageInterest });
//
//   for (var per = 1; per <= periods; per++) {
//     interestArr.push(interestPayment(pmt, rate, pv, per));
//   }
//
//   return interestArr;
// };
//
// export const interestPayment = (pmt, rate, pv, per) => {
//   // pmt + (1+ir)^(n-1) *(pv * ir - pmt)
//   return .eval(`${pmt} + (1 + ${rate})^(${per} - 1) * (${pv} * ${rate} - ${pmt})`);
// };
//
// export const excelFormulas = {
//   PMT: function(rate, nper, pv, fv, type) {
//     if (!fv) fv = 0;
//     if (!type) type = 0;
//
//     if (rate === 0) return -(pv + fv)/nper;
//
//     var pvif = .eval(`1 + ${rate} ^ ${nper}`);
//     var pmt = rate / (pvif - 1) * -(pv * pvif + fv);
//
//     if (type === 1) {
//       pmt /= (1 + rate);
//     };
//
//     return pmt;
//   },
//
//   IPMT: function(pv, pmt, rate, per) {
//     var tmp = .eval(`1 + ${rate} ^ ${per}`);
//     return 0 - (pv * tmp * rate + pmt * (tmp - 1));
//   }
// };
