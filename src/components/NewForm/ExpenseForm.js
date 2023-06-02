import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    let titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }
    let amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }
    let dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }
    
    let submitHandler = (event) => {
        event.preventDefault();
        let date = new Date(enteredDate).toLocaleString('en-US', {day: "2-digit"});
        let month = new Date(enteredDate).toLocaleString('en-US', {month: "long"});
        let year = new Date(enteredDate).getFullYear();
        let expenseData = {
            itemName: enteredTitle,
            itemPrice: parseInt(enteredAmount),
            itemAddDate: `${date} ${month} ${year}`
        }

        props.onSaveExpenseData(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <input type='text' placeholder='Expense Name' onChange={titleChangeHandler} value={enteredTitle} required />
                <input type='number' placeholder='Expense Price' onChange={amountChangeHandler} value={enteredAmount} required />
                <input type='date' onChange={dateChangeHandler} value={enteredDate} required />
                <button>Add</button>
            </form>
        </>
    )
}

export default ExpenseForm;