import { useState } from "react";


const useInput = (validateValue) => {

    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);
  
    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;
  
    const valueChangeHandler = (event) => {
       setEnteredValue(event.target.value);
    };

    const inputBlurHandler = () => {
       setIsTouched(true);
    };

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    }


    // hook returning onj
    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError: hasError, //or hasError, feature of js
        valueChangeHandler,
        inputBlurHandler,
        reset,
    };
};

export default useInput;