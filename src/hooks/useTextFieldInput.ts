import { useState } from 'react';

/** 배열로 return 하려면 return type을 명시해주어야 함. */
type TextFieldInputReturnType = [string, (value: string) => void];
const useTextFieldInput = (init: string): TextFieldInputReturnType => {
  const [state, setState] = useState<string>(init);

  const handleValueChange = (value: string) => {
    setState(value);
  };

  return [state, handleValueChange];
};

export default useTextFieldInput;
