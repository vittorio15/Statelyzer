import TextDatabase from "./TextDatabase";

const TextGenerator = ({ calculatedData }) => {
  const generateText = (results) => {
    if (!results) return "No data provided.";

    return Object.entries(results)
      .map(([key, { color }]) => {
        const textSet = TextDatabase[key];
        if (!textSet) return `${key.replace(/([a-z])([A-Z])/g, "$1 $2")}: No text available.`;

        // Pick the sentence based on the color
        const sentence =
          color === "green"
            ? textSet.green
            : color === "yellow"
            ? textSet.yellow
            : textSet.red;

        return sentence;
      })
      .join(" ");
  };

  return generateText(calculatedData);
};

export default TextGenerator;
