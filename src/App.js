import React, { useState } from 'react';
import "./App.css";
import ExpenseItem from "./components/expenses/ExpenseItem";
import Card from './components/ui/Card';
import NewExpense from './components/NewForm/NewExpense';

const App = () => {

    const [expense, setExpense] = useState([]);

    function totalPrice(array, property){
        let sum = array.reduce(function(accu, obj){
            return accu + obj[property];
        }, 0);

        return sum;
    }

    let getExpenseItem = (newExpenseItem) => {
        let updatedExpense = [newExpenseItem, ...expense];
        setExpense(updatedExpense);
    }

    return (
        <>
            <section>
                <NewExpense onAddExpense={getExpenseItem} />
                <Card className="expense-container">
                    <h2>Monthly Expenses</h2>
                    <div className="expenses-box">
                        {
                            expense.map(function(elm, index){
                                return (
                                    <ExpenseItem itemDate={elm.itemAddDate} itemName={elm.itemName} itemPrice={elm.itemPrice} key={index} />
                                )
                            })
                        }
                    </div>
                    <p className='total-price'>Total - ${totalPrice(expense, "itemPrice")}</p>
                </Card>
            </section>
        </>
    )
}

export default App;