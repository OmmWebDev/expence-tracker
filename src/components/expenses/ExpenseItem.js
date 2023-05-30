import React from 'react';
import "./ExpenseItem.css";

const ExpenseItem = ({itemName, itemPrice}) => {

    let year = new Date().getFullYear();
    let month = new Date().toLocaleString('en-US', {month: "long"});
    let day = new Date().toLocaleString('en-US', {day: "2-digit"});

    return (
        <>
            <div className="expense">
                <p className="date">{`${day} ${month} ${year}`}</p>
                <p className="expense-item-name">{itemName}</p>
                <span>${itemPrice}</span>
            </div>
        </>
    )
}

export default ExpenseItem;