import { useState } from 'react';
import './ExpenseForm.css'
const ExpenseForm = (props) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  // const [userInput, setUserInput] = useState({
  //   title: '',
  //   amount: '',
  //   date: ''
  // });

  const titleChangeHandler = (e) => {
    // setUserInput((prev) => {
    //   return {...prev, title: e.target.value }
    // })
    setTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
   setAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
   setDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {title, amount, date: new Date(date)}
    props.onSaveExpenseData(data);
    props.onCancel();
    setTitle('');
    setAmount('');
    setDate('');
  };


  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type="number" value={amount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type="date" value={date} min="2019-01-01" step="2023-12-31" onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type='submit'>Add Expense </button>
      </div>
    </form>
   );
}

export default ExpenseForm;