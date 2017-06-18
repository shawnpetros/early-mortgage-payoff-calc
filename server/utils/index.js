import BigNumber from 'bignumber.js';

export const FV = (r, n, pmt, pv, mode, compoundMonthly) => {
  n = mode === undefined || mode === 0 ? n : n / 12;
  r = r > 1 ? r / 100 : r;
  const principle = new BigNumber(pv);
  let interest = new BigNumber(r);
  const periods = new BigNumber(n);
  const periodicPMT = new BigNumber(pmt);

  interest = compoundMonthly === true ? interest.div(12).plus(1).pow(12).minus(1) : interest;

  const annuityPeriods = mode === undefined || mode === 0 ? periods.times(12) : periods;

  const principleTVM = interest.plus(1).pow(periods);
  const principleFV = principle.times(principleTVM);
  const annuityTVM = interest.plus(1).pow(annuityPeriods).minus(1).div(interest);
  const annuityFV = periodicPMT.times(annuityTVM);

  console.log(principleFV.round(2).toNumber(), annuityFV.round(2).toNumber());

  return principleFV.plus(periodicPMT).round(2).toNumber();
};
