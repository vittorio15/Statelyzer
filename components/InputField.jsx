

const InputField = () => {
    return (
      <input
        onKeyDown={(event) => {
          if (!/[0-9]/.test(event.key) && event.key !== 'Backspace' && event.key !== 'Delete') {
            event.preventDefault();
          }
        }}
      />
    );
  };
  
  export default InputField;
  