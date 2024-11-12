

const InputField = () => {
    return (
      <input
        className="text-center h-10 rounded-xl border-2 bg-white"
        onKeyDown={(event) => {
          const isControlCombo = event.ctrlKey || event.metaKey;

          // Allow numbers, backspace, delete, and common ctrl/meta combinations
          if (!/[0-9]/.test(event.key) &&
              event.key !== 'Backspace' &&
              event.key !== 'Delete' &&
              event.key !== 'Tab' &&
              !isControlCombo) {
            event.preventDefault();
          }  
        }}
      />
    );
  };
  
  export default InputField;
  