
const InputField = ({ value, onChange}) => {

  const formatInput = (inputValue) => {
    // Remove any existing spaces
    const digitsOnly = inputValue.replace(/\s/g, "");
    // Reverse the string, group in threes, and reverse back
    return digitsOnly
      .split("")
      .reverse()
      .join("")
      .replace(/(\d{3})(?=\d)/g, "$1 ")
      .split("")
      .reverse()
      .join("")
      .trim();
  };  

  const handleChange = (event) => {
    const rawValue = event.target.value.replace(/\s/g, ""); // Unformatted value
    onChange(rawValue); // Send raw value without spaces
  };

  return (
    <input
      className="px-4 py-2 text-center rounded-2xl border-2 border-gray-300 hover:border-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
      value={formatInput(value)}
      maxLength={11}
      onChange={handleChange}
      onKeyDown={(event) => {
        const isControlCombo = event.ctrlKey || event.metaKey;

        // Allow numbers, backspace, delete, and common ctrl/meta combinations
        if (
          !/[0-9]/.test(event.key) &&
          event.key !== "Backspace" &&
          event.key !== "Delete" &&
          event.key !== "Tab" &&
          !isControlCombo
        ) {
          event.preventDefault();
        }
      }}
    />
  );
};

export default InputField;
