import BigNumber from 'bignumber.js';

export const FV = (r, n, pmt, pv, mode, compoundMonthly) => {
  n = mode === undefined || mode === 0 ? n : n / 12;
  r = r > 1 ? r / 100 : r;
  const principle = new BigNumber(pv);
  let interest = new BigNumber(r);
  let annuityInterest = new BigNumber(r);
  const periods = new BigNumber(n);
  const periodicPMT = new BigNumber(pmt);

  interest = compoundMonthly === true ? interest.div(12).plus(1).pow(12).minus(1) : interest;
  annuityInterest = annuityInterest.div(12);

  const annuityPeriods = mode === undefined || mode === 0 ? periods.times(12) : periods;

  const principleTVM = interest.plus(1).pow(periods);
  const principleFV = principle.times(principleTVM);
  const annuityTVM = annuityInterest.plus(1).pow(annuityPeriods).minus(1).div(annuityInterest);
  const annuityFV = periodicPMT.times(annuityTVM);

  return principleFV.plus(annuityFV).round(2).toNumber();
};
