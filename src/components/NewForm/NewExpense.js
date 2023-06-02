import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    let savedExpenseDataHandler = (enteredExpenseData) => {
        let expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        
        props.onAddExpense(expenseData);
    }
    
    return (
        <>
            <div className='new-expense'>
                <ExpenseForm onSaveExpenseData={savedExpenseDataHandler} />
            </div>
        </>
    )
}

export default NewExpense;