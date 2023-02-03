import useInput from '../hooks/use-input';


const SimpleInput = (props) => {
  // below hook returns obj hence we need obj-destructuring
  const {
    // right sides are aliasing
       value: enteredName, 
       isValid: enteredNameIsValid,
       hasError: nameInputHasError, 
       valueChangeHandler: nameChangeHandler,
       inputBlurHandler: nameBlurHandler,
       reset: resetNameInput,

      //  below is the value i.e. validate function which we need to pass in the hook
      // below is not a value, its a funtion passed which will be used in use-input.js
        } = useInput( value => value.trim() !== '');

  const {
       value: enteredEmail, 
       isValid: enteredEmailIsValid,
       hasError: emailInputHasError, 
       valueChangeHandler: emailChangeHandler,
       inputBlurHandler: emailBlurHandler,
       reset: resetEmailInput,

      //  below is a inline validation function
  } = useInput(value => value.includes('@'));

  let formIsValid = false;
  
  if(enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    resetNameInput(); // pass ''
    resetEmailInput();
  };

  
  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
           type='text' 
           id='name' 
           onChange={nameChangeHandler}
           // onBlur fires when input losses focus
           onBlur={nameBlurHandler}
           value={enteredName}
        />
        {nameInputHasError && <p className='error-text'>Name must not be empty</p>}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor='email'>Your E-Mail</label>
        <input 
           type='email' 
           id='email' 
           onChange={emailChangeHandler}
           // onBlur fires when input losses focus
           onBlur={emailBlurHandler}
           value={enteredEmail}
        />
        {emailInputHasError && <p className='error-text'>Please enter valid email.</p>}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
