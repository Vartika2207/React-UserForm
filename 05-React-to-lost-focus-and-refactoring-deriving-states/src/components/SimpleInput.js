import { useState } from 'react';


const SimpleInput = (props) => {

  // const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  
  // useEffect(() => {
  //   if(enteredNameIsValid) {
  //     console.log('Name is valid');
  //   }
  // }, [enteredNameIsValid]);

  const nameInputChangeHandler = (event) => {
    // console.log(event.target.value);
    setEnteredName(event.target.value);

    // instead of enteredName, i used event.target.value bcz state updates are scheduled by react 
    // and they are not processed immediately hence we will not have latest state.
    // if(event.target.value.trim() !== '') {
    //   setEnteredNameIsValid(true);
    // }
  };

  const nameInputBlurHandler = () => {
    // if user losses focus it means he got a chance to enter password
    setEnteredNameTouched(true);

    // if(enteredName.trim() === '') {
    //   setEnteredNameIsValid(false);
    // }

  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);
    console.log(enteredName);

    if(!enteredNameIsValid) {
      // setEnteredNameIsValid(false);
      return;
    }

    // const entredValue = nameInputRef.current.value;
    // console.log(enetredValue);
    setEnteredName('');
    setEnteredNameTouched(false);
  };

  
  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          //  ref={nameInputRef} 
           type='text' 
           id='name' 
           onChange={nameInputChangeHandler}
           // onBlur fires when input losses focus
           onBlur={nameInputBlurHandler}
           value={enteredName}
        />
        {nameInputIsInvalid && <p className='error-text'>Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button >Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
