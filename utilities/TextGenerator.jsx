
const TextGenerator = ({ calculatedData }) => {
  // Function to generate text based on results
  const generateText = (results) => {
    if (results.revenueToNetIncome === "N/A") {
      return "We couldn't calculate the Revenue to Net Income ratio.";
    }
    return `The Revenue to Net Income ratio is ${results.revenueToNetIncome}.`;
  };

  const textResult = generateText(calculatedData);

  return textResult;
};


export default TextGenerator;