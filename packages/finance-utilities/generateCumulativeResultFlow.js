/**
 * Generates a cumulative result flow from a financial flow array.
 * 
 * This function calculates cumulative sums of payments from a financial flow
 * and optionally aligns them with a provided list of dates. If no dates are
 * provided, it simply accumulates the payments in the order they appear.
 * 
 * @param {Array<{date: any, payment: number}>} financialFlow - An array of objects representing financial transactions, 
 * each containing a `date` and a `payment` amount.
 * @param {Array<any>} [dates] - An optional array of dates to align the cumulative results with. 
 * If provided, the function ensures that the cumulative results are aligned with these dates.
 * @returns {Array<{date: any, value: number}>} - An array of objects, each containing a `date` and the cumulative `value` 
 * of payments up to that point.
 */
export function generateCumulativeResultFlow(financialFlow, dates) {
  let sum = 0;
  let i = 0;
  return financialFlow.reduce((res, { date, payment }, index) => {
    if (!dates) {
      res.push({ date, value: payment + sum });
    } else {
      const currentDate = dates[i];
      if (
        index === financialFlow.length - 1 ||
        currentDate.isBefore(financialFlow[index + 1].date)
      ) {
        res.push({ date, value: payment + sum });
        i++;
      }
    }
    sum += payment;
    return res;
  }, []);
}