import { useRef, useState } from 'react';


const SimpleInput = (props) => {

  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);

  const nameInputChangeHandler = (event) => {
    // console.log(event.target.value);
    setEnteredName(event.target.value);

  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    console.log(enteredName);
    if(enteredName.trim() === '') {
      setEnteredNameIsValid(false);
      return;
    }
    setEnteredNameIsValid(true);

    const enetredValue = nameInputRef.current.value;
    console.log(enetredValue);
    setEnteredName('');
  };

  const nameInputClasses = enteredNameIsValid ? 'form-control' : 'form-control invalid';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
           ref={nameInputRef} 
           type='text' 
           id='name' 
           onChange={nameInputChangeHandler}
           value={enteredName}
        />
        {!enteredNameIsValid && <p className='error-text'>Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button >Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
