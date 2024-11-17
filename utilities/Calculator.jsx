const Calculator = ({ inputValues }) => {
  // Function to calculate the Revenue to Net Income ratio
  const calculateResults = (inputValues) => {
    const revenue = parseFloat(inputValues["Revenue"] || 0);
    const netIncome = parseFloat(inputValues["Net Income"] || 0);

    return {
      revenueToNetIncome: netIncome !== 0 ? (revenue / netIncome).toFixed(2) : "N/A",
    };
  };

  // Return the calculated results
  return calculateResults(inputValues);
}
export default Calculator;