import { useReducer } from "react";

const intialInputState = {
    value: '',
    isTouched: false,   
};

// take 2 argument, prevState snapshot and action (you dispatched in code)
const inputStateReducer = (state, action) => {
    if(action.type === 'INPUT') {
        return { value: action.value, isTouched: state.isTouched};
    }
    if(action.type === 'BLUR') {
        return { isTouched: true, value: state.value}
    }
    if(action.type === 'RESET') {
        return {isTouched: false, value: '' };
    }
   
    // below is default state snapshot
    return inputStateReducer;
};

const useInput = (validateValue) => {
    // return 2 elements, 1st is state managed by reducer and 2nd is dispatched function (which allows to dispatch actions against that reducer)
    const [inputState, dispatch] = useReducer(inputStateReducer, intialInputState);

    // const [enteredValue, setEnteredValue] = useState('');
    // const [isTouched, setIsTouched] = useState(false);
  
    const valueIsValid = validateValue(inputState.value);
    const hasError = !valueIsValid && inputState.isTouched;
  
    const valueChangeHandler = (event) => {
       dispatch({type: 'INPUT', value: event.target.value});
    //    setEnteredValue(event.target.value);
    };

    const inputBlurHandler = (event) => {
        dispatch({type: 'BLUR', value: event.target.value});
    //    setIsTouched(true);
    };

    const reset = () => {
        dispatch({type: 'RESET'});
        // setEnteredValue('');
        // setIsTouched(false);
    }


    // hook returning onj
    return {
        value: inputState.value,
        isValid: valueIsValid,
        hasError: hasError, //or hasError, feature of js
        valueChangeHandler,
        inputBlurHandler,
        reset,
    };
};

export default useInput;