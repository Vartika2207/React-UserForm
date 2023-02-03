import { useState } from 'react';


const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  
  const enteredEmailIsValid = enteredEmail.trim() !== '' && enteredEmail.includes('@') && enteredEmail.includes('.');
  const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;
  
  if(enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    // console.log(event.target.value);
    setEnteredName(event.target.value);
  };

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value)
  };

  const nameInputBlurHandler = () => {
    // if user losses focus it means he got a chance to enter password
    setEnteredNameTouched(true);
  };

  const emailInputBlurHandler = () => {
    // if user losses focus it means he got a chance to enter password
    setEnteredEmailTouched(true);
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
    setEnteredEmail('');
    setEnteredEmailTouched(false);
  };

  
  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';
  const emailInputClasses = enteredEmailIsInvalid ? 'form-control invalid' : 'form-control';

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

      <div className={emailInputClasses}>
        <label htmlFor='email'>Your E-Mail</label>
        <input 
           type='email' 
           id='email' 
           onChange={emailInputChangeHandler}
           // onBlur fires when input losses focus
           onBlur={emailInputBlurHandler}
           value={enteredEmail}
        />
        {enteredEmailIsInvalid && <p className='error-text'>Please enter valid email.</p>}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
