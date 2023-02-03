import { useState } from 'react';


const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  
  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  
  let formIsValid = false;
  
  if(enteredNameIsValid) {
    formIsValid = true;
  }

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
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);
    console.log(enteredName);

    if(!enteredNameIsValid) {
      // setEnteredNameIsValid(false);
      return;
    }
    setEnteredName('');
    setEnteredNameTouched(false);
  };

  
  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
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
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
