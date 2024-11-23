const Calculator = ({ inputValues }) => {
  const thresholds = {
    currentRatio: { low: 1.0, high: 3.0 }, // Ideal range for liquidity: enough to cover liabilities without being excessive.
    quickRatio: { low: 0.8, high: 2.0 },  // Focuses on liquidity excluding inventories; a slightly lower range than current ratio.
    ROA: { low: 0.05, high: 0.2 },        // 5%-20% is typical; higher is better for efficient asset use.
    ROE: { low: 0.1, high: 0.3 },         // 10%-30% is good; shows how well equity generates returns.
    debtToEquityRatio: { low: 0.5, high: 2.0 }, // <1 is conservative; >2 may indicate high leverage risk.
    equityRatio: { low: 0.3, high: 0.7 }, // 30%-70% equity indicates healthy financing mix.
    debtRatio: { low: 0.2, high: 0.6 },   // 20%-60% is ideal; higher ratios indicate more debt reliance.
    cashRatio: { low: 0.2, high: 1.0 },   // Shows immediate liquidity; >1 indicates strong cash position.
    equityMultiplier: { low: 1.5, high: 3.0 }, // High multiplier suggests significant leverage.
    debtMaturityRatio: { low: 0.2, high: 0.8 }, // Healthy balance of short- and long-term obligations.
  };
  
  const calculateResults = (inputs) => {
    const parseField = (field) => parseFloat(inputs[field] || 0);

    const currentRatio = 
    parseField("Current Assets") !== 0 
      ? parseField("Current Assets") / parseField("Short-Term Debt") 
      : null;

  const quickRatio = 
      parseField("Short-Term Debt") !== 0 
        ? (parseField("Current Assets") - parseField("Inventories")) / parseField("Short-Term Debt") 
        : null;

  const ROA = 
      parseField("Total Assets") !== 0 
        ? parseField("Net Income") / parseField("Total Assets") 
        : null;

  const ROE = 
      parseField("Shareholder's Equity") !== 0 
        ? parseField("Net Income") / parseField("Shareholder's Equity") 
        : null;

  const debtToEquityRatio = 
      parseField("Shareholder's Equity") !== 0 
        ? parseField("Total Liabilities") / parseField("Shareholder's Equity") 
        : null;

  const equityRatio = 
      parseField("Total Assets") !== 0 
        ? parseField("Shareholder's Equity") / parseField("Total Assets") 
        : null;

  const debtRatio = 
      parseField("Total Assets") !== 0 
        ? parseField("Total Liabilities") / parseField("Total Assets") 
        : null;

  const cashRatio = 
      parseField("Short-Term Debt") !== 0 
        ? parseField("Cash and Cash Equivalents") / parseField("Short-Term Debt") 
        : null;

  const equityMultiplier = 
      parseField("Shareholder's Equity") !== 0 
        ? parseField("Total Assets") / parseField("Shareholder's Equity") 
        : null;

  const debtMaturityRatio = 
      parseField("Long-Term Debt") !== 0 
        ? parseField("Short-Term Debt") / parseField("Long-Term Debt") 
        : null;

        const evaluateThreshold = (value, { low, high }) => {
          if (value < low - 0.5) return { value, color: "red", text: "Significantly below optimal" };
          if (value >= low - 0.5 && value < low) return { value, color: "yellow", text: "Slightly below optimal" };
          if (value >= low && value <= high) return { value, color: "green", text: "Optimal" };
          if (value > high && value <= high + 0.5) return { value, color: "yellow", text: "Slightly above optimal" };
          if (value > high + 0.5) return { value, color: "red", text: "Significantly above optimal" };
          return { value, color: "green", text: "Optimal" };
        };
        

    return {
      currentRatio: evaluateThreshold(
        currentRatio,
        thresholds.currentRatio
      ),
      
      quickRatio: evaluateThreshold(
        quickRatio,
        thresholds.quickRatio
      ),
      
      ROA: evaluateThreshold(
        ROA,
        thresholds.ROA
      ),
      
      ROE: evaluateThreshold(
        ROE,
        thresholds.ROE
      ),
      
      debtToEquityRatio: evaluateThreshold(
        debtToEquityRatio,
        thresholds.debtToEquityRatio
      ),
      
      equityRatio: evaluateThreshold(
        equityRatio,
        thresholds.equityRatio
      ),
      
      debtRatio: evaluateThreshold(
        debtRatio,
        thresholds.debtRatio
      ),
      
      cashRatio: evaluateThreshold(
        cashRatio,
        thresholds.cashRatio
      ),
      
      equityMultiplier: evaluateThreshold(
        equityMultiplier,
        thresholds.equityMultiplier
      ),
      
      debtMaturityRatio: evaluateThreshold(
        debtMaturityRatio,
        thresholds.debtMaturityRatio
      ),      
    };
  };

  return calculateResults(inputValues);
};

export default Calculator;
