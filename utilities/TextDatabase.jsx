const TextDatabase = {
  currentRatio: {
    green: "The current ratio is within the ideal range, indicating strong short-term liquidity.",
    yellow: {
      slightlyBelow: "The current ratio is slightly below the optimal range, suggesting a need to reassess short-term liabilities or assets.",
      slightlyAbove: "The current ratio is slightly above the optimal range, which might indicate over-liquidity or under-leverage.",
    },
    red: {
      significantlyBelow: "The current ratio is significantly below the ideal range, which may indicate liquidity challenges or inefficient asset utilization.",
      significantlyAbove: "The current ratio is significantly above the ideal range, which may suggest over-liquidity or inefficient asset management.",
    }
  },
  quickRatio: {
    green: "The quick ratio is optimal, indicating sufficient liquidity excluding inventories.",
    yellow: {
      slightlyBelow: "The quick ratio is slightly below the optimal range, which could signal liquidity issues excluding inventories.",
      slightlyAbove: "The quick ratio is slightly above the optimal range, suggesting an over-conservative approach to liquidity.",
    },
    red: {
      significantlyBelow: "The quick ratio is significantly below the optimal range, indicating a potential liquidity problem excluding inventories.",
      significantlyAbove: "The quick ratio is significantly above the optimal range, suggesting unnecessary liquid assets or missed investment opportunities.",
    }
  },
  ROA: {
    green: "The return on assets (ROA) is within the optimal range, showcasing efficient use of company assets.",
    yellow: {
      slightlyBelow: "The return on assets (ROA) is slightly below the ideal range, suggesting potential improvements in asset utilization.",
      slightlyAbove: "The return on assets (ROA) is slightly above the ideal range, indicating efficient use of assets but room for optimization.",
    },
    red: {
      significantlyBelow: "The return on assets (ROA) is far below the optimal range, indicating inefficiencies in asset management.",
      significantlyAbove: "The return on assets (ROA) is significantly above the optimal range, which may suggest overutilization of assets.",
    }
  },
  ROE: {
    green: "The return on equity (ROE) is within the ideal range, reflecting effective use of shareholder funds.",
    yellow: {
      slightlyBelow: "The return on equity (ROE) is slightly below the optimal range, consider reviewing equity utilization strategies.",
      slightlyAbove: "The return on equity (ROE) is slightly above the ideal range, suggesting potential for higher leverage or risk.",
    },
    red: {
      significantlyBelow: "The return on equity (ROE) is significantly below the ideal range, which may signal underperformance.",
      significantlyAbove: "The return on equity (ROE) is significantly above the optimal range, indicating over-leverage or unsustainable returns.",
    }
  },
  debtToEquityRatio: {
    green: "The debt-to-equity ratio is within a healthy range, indicating balanced financial leverage.",
    yellow: {
      slightlyBelow: "The debt-to-equity ratio is slightly below the optimal range, consider monitoring debt levels.",
      slightlyAbove: "The debt-to-equity ratio is slightly above the optimal range, suggesting potential risk in debt management.",
    },
    red: {
      significantlyBelow: "The debt-to-equity ratio is far from ideal, suggesting a high reliance on debt or insufficient equity.",
      significantlyAbove: "The debt-to-equity ratio is far from ideal, indicating excessive debt or undercapitalization.",
    }
  },
  equityRatio: {
    green: "The equity ratio is in the ideal range, reflecting a stable capital structure.",
    yellow: {
      slightlyBelow: "The equity ratio is slightly below the desired range, which may require adjustments to equity or liabilities.",
      slightlyAbove: "The equity ratio is slightly above the ideal range, suggesting a solid capital structure but potentially inefficient use of equity.",
    },
    red: {
      significantlyBelow: "The equity ratio is significantly off, indicating potential overreliance on debt financing.",
      significantlyAbove: "The equity ratio is significantly above the ideal range, suggesting underutilized equity or missed leverage opportunities.",
    }
  },
  debtRatio: {
    green: "The debt ratio is within the optimal range, indicating a balanced approach to liabilities.",
    yellow: {
      slightlyBelow: "The debt ratio is slightly below the ideal range, suggesting the need for closer monitoring of debt levels.",
      slightlyAbove: "The debt ratio is slightly above the optimal range, indicating higher reliance on debt and potential risk.",
    },
    red: {
      significantlyBelow: "The debt ratio is far from ideal, which could signal excessive reliance on equity or insufficient debt financing.",
      significantlyAbove: "The debt ratio is far from ideal, which could signal excessive reliance on debt, potentially leading to financial instability.",
    }
  },
  cashRatio: {
    green: "The cash ratio indicates a strong cash position to cover short-term obligations.",
    yellow: {
      slightlyBelow: "The cash ratio is slightly below the ideal range, indicating a potential gap in cash liquidity.",
      slightlyAbove: "The cash ratio is slightly above the optimal range, suggesting an overly conservative cash position.",
    },
    red: {
      significantlyBelow: "The cash ratio is significantly outside the range, highlighting potential liquidity risks.",
      significantlyAbove: "The cash ratio is significantly above the ideal range, indicating unused cash that could be better utilized for growth or investment.",
    }
  },
  equityMultiplier: {
    green: "The equity multiplier is in the healthy range, reflecting balanced financial leverage.",
    yellow: {
      slightlyBelow: "The equity multiplier is slightly below the ideal range, suggesting a lower-than-expected reliance on debt.",
      slightlyAbove: "The equity multiplier is slightly above the ideal range, indicating potential over-leverage.",
    },
    red: {
      significantlyBelow: "The equity multiplier is significantly below the ideal range, suggesting under-leverage and possibly missed growth opportunities.",
      significantlyAbove: "The equity multiplier is significantly above the ideal range, indicating excessive reliance on debt and potential financial risk.",
    }
  },
  debtMaturityRatio: {
    green: "The debt maturity ratio shows a balanced approach between short-term and long-term obligations.",
    yellow: {
      slightlyBelow: "The debt maturity ratio is slightly outside the ideal range, consider reviewing debt structuring.",
      slightlyAbove: "The debt maturity ratio is slightly above the ideal range, suggesting a balanced approach but with a potential for risk management improvements.",
    },
    red: {
      significantlyBelow: "The debt maturity ratio is significantly off, which could indicate potential liquidity or refinancing risks.",
      significantlyAbove: "The debt maturity ratio is significantly above the ideal range, suggesting excessive long-term debt or a potential mismatch in obligations.",
    }
  },
};

export default TextDatabase;
