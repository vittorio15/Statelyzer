import { useState } from "react";

const InputField = () => {
  const [value, setValue] = useState("");

  const formatInput = (inputValue) => {
    // Remove any existing spaces
    const digitsOnly = inputValue.replace(/\s/g, "");
    // Group the digits in threes and join with a space
    return digitsOnly.replace(/(\d{3})(?=\d)/g, "$1 ");
  };

  const handleChange = (event) => {
    const formattedValue = formatInput(event.target.value);
    setValue(formattedValue);
  };

  return (
    <input
      className="px-4 py-2 text-center rounded-2xl border-2 border-gray-300 hover:border-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
      value={value}
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
