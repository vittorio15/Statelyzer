import TextDatabase from "./TextDatabase";

const TextGenerator = ({ calculatedData }) => {
  const generateText = (results) => {
    if (!results) return "No data provided.";

    return Object.entries(results)
      .map(([key, { color, text }]) => {
        const textSet = TextDatabase[key];
        if (!textSet) return `${key.replace(/([a-z])([A-Z])/g, "$1 $2")}: No text available.`;

        // Handle different cases based on color and direction
        const sentence =
          color === "green"
            ? textSet.green
            : color === "yellow"
            ? text === "Slightly below optimal"
              ? textSet.yellow.slightlyBelow
              : textSet.yellow.slightlyAbove
            : text === "Significantly below optimal"
            ? textSet.red.significantlyBelow
            : textSet.red.significantlyAbove;

        return sentence;
      })
      .join(" ");
  };

  return generateText(calculatedData);
};


export default TextGenerator;
