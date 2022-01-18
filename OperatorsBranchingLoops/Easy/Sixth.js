let peakMonthDaysSequence = [1, 3, 5, 7, 8, 9];

const isPeakMonth = (monthPosition) =>
  peakMonthDaysSequence.includes(monthPosition);

console.log(isPeakMonth(4));
