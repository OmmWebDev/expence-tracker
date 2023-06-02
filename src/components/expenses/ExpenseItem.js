import React from 'react';
import "./ExpenseItem.css";

const ExpenseItem = ({itemName, itemPrice, itemDate}) => {
    return (
        <>
            <div className="expense">
                <p className="date">{itemDate}</p>
                <p className="expense-item-name">{itemName}</p>
                <span>${itemPrice}</span>
            </div>
        </>
    )
}

export default ExpenseItem;