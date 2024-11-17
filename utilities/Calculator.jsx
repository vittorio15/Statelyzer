const Calculator = ({ inputValues }) => {
  // Function to calculate the Revenue to Net Income ratio
  const calculateResults = (inputValues) => {
  // Basic fields
  const totalAssets = parseFloat(inputValues["Total Assets"] || 0);
  const currentAssets = parseFloat(inputValues["Current Assets"] || 0);
  const cashAndCashEquivalents = parseFloat(inputValues["Cash & Cash Equivalents"] || 0);
  const totalLiabilities = parseFloat(inputValues["Total Liabilities"] || 0);
  const currentLiabilities = parseFloat(inputValues["Current Liabilities"] || 0);
  const longTermDebt = parseFloat(inputValues["Long-Term Debt"] || 0);
  const shareholdersEquity = parseFloat(inputValues["Shareholders' Equity"] || 0);
  const revenue = parseFloat(inputValues["Revenue"] || 0);
  const netIncome = parseFloat(inputValues["Net Income"] || 0);

  // Advanced fields
  const accountsReceivable = parseFloat(inputValues["Accounts Receivable"] || 0);
  const grossProfit = parseFloat(inputValues["Gross Profit"] || 0);
  const operatingIncome = parseFloat(inputValues["Operating Income"] || 0);
  const cogs = parseFloat(inputValues["COGS"] || 0);
  const sga = parseFloat(inputValues["SG&A"] || 0);
  const interestExpense = parseFloat(inputValues["Interest Expense"] || 0);
  const incomeTaxExpense = parseFloat(inputValues["Income Tax Expense"] || 0);

    return {
      revenueToNetIncome: netIncome !== 0 ? (revenue / netIncome).toFixed(2) : "N/A",
      totalAssetstoCurrentassets: (totalAssets / currentAssets).toFixed(2)
    };
  };

  // Return the calculated results
  return calculateResults(inputValues);
}
export default Calculator;