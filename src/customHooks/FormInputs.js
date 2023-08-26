import { useState } from 'react';

const useFormInput = () => {
  const [inputValue, setInputValue] = useState({});

  const handleInputChanges = (key, value) => {
    setInputValue((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  return { inputValue, handleInputChanges };
};

export default useFormInput;
