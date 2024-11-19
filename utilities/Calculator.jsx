const Calculator = ({ inputValues }) => {
  const thresholds = {
    revenueToNetIncome: { low: 1.5, high: 3.0 },
    totalAssetsToCurrentAssets: { low: 0.5, high: 2.0 },
  };

  const calculateResults = (inputs) => {
    const parseField = (field) => parseFloat(inputs[field] || 0);

    const revenueToNetIncome =
      parseField("Net Income") !== 0
        ? parseField("Revenue") / parseField("Net Income")
        : null;

    const totalAssetsToCurrentAssets =
      parseField("Total Assets") !== 0
        ? parseField("Total Assets") / parseField("Current Assets")
        : null;

    const evaluateThreshold = (value, { low, high }) => {
      if (value < low && value > low - 0.5) return { value, color: "yellow", text: "Slightly below optimal" };
      if (value > high && value < high + 0.5) return { value, color: "yellow", text: "Slightly above optimal" };
      if (value > high + 0.5) return { value, color: "red", text: "Significantly above optimal" };
      if (value < low - 0.5) return { value, color: "red", text: "Significantly below optimal" };
      return { value, color: "green", text: "Optimal" };
    };

    return {
      revenueToNetIncome: evaluateThreshold(
        revenueToNetIncome,
        thresholds.revenueToNetIncome
      ),
      totalAssetsToCurrentAssets: evaluateThreshold(
        totalAssetsToCurrentAssets,
        thresholds.totalAssetsToCurrentAssets
      ),
    };
  };

  return calculateResults(inputValues);
};

export default Calculator;
