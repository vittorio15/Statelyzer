const TextDatabase = {
  currentRatio: {
    green: "The current ratio is within the ideal range, indicating strong short-term liquidity.",
    yellow: "The current ratio is slightly off the optimal range, suggesting a potential need to reassess short-term liabilities or assets.",
    red: "The current ratio is significantly below or above the ideal range, which may indicate liquidity challenges or inefficient asset utilization.",
  },
  quickRatio: {
    green: "The quick ratio indicates excellent liquidity without overreliance on inventories.",
    yellow: "The quick ratio is slightly off, consider analyzing the liquidity of your current assets.",
    red: "The quick ratio is far from optimal, highlighting potential issues with meeting short-term obligations.",
  },
  ROA: {
    green: "The return on assets (ROA) is within the optimal range, showcasing efficient use of company assets.",
    yellow: "The return on assets (ROA) is slightly outside the ideal range, suggesting potential improvements in asset utilization.",
    red: "The return on assets (ROA) is far below the optimal range, indicating inefficiencies in asset management.",
  },
  ROE: {
    green: "The return on equity (ROE) is within the ideal range, reflecting effective use of shareholder funds.",
    yellow: "The return on equity (ROE) is slightly off the optimal range, consider reviewing equity utilization strategies.",
    red: "The return on equity (ROE) is significantly below the ideal range, which may signal underperformance.",
  },
  debtToEquityRatio: {
    green: "The debt-to-equity ratio is within a healthy range, indicating balanced financial leverage.",
    yellow: "The debt-to-equity ratio is slightly outside the optimal range, consider monitoring debt levels.",
    red: "The debt-to-equity ratio is far from ideal, suggesting a high reliance on debt or insufficient equity.",
  },
  equityRatio: {
    green: "The equity ratio is in the ideal range, reflecting a stable capital structure.",
    yellow: "The equity ratio is slightly outside the desired range, which may require adjustments to equity or liabilities.",
    red: "The equity ratio is significantly off, indicating potential overreliance on debt financing.",
  },
  debtRatio: {
    green: "The debt ratio is within the optimal range, indicating a balanced approach to liabilities.",
    yellow: "The debt ratio is slightly outside the ideal range, suggesting a need for closer monitoring.",
    red: "The debt ratio is far from ideal, which could signal excessive reliance on debt.",
  },
  cashRatio: {
    green: "The cash ratio indicates a strong cash position to cover short-term obligations.",
    yellow: "The cash ratio is slightly off, consider reviewing liquidity management strategies.",
    red: "The cash ratio is significantly outside the range, highlighting potential liquidity risks.",
  },
  equityMultiplier: {
    green: "The equity multiplier is in the healthy range, reflecting balanced financial leverage.",
    yellow: "The equity multiplier is slightly off, suggesting the need to reassess financial structure.",
    red: "The equity multiplier is far from ideal, indicating excessive leverage or underutilized equity.",
  },
  debtMaturityRatio: {
    green: "The debt maturity ratio shows a balanced approach between short-term and long-term obligations.",
    yellow: "The debt maturity ratio is slightly outside the ideal range, consider reviewing debt structuring.",
    red: "The debt maturity ratio is significantly off, which could indicate potential liquidity or refinancing risks.",
  },
};

export default TextDatabase;
