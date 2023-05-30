import React from 'react';
import "./App.css";
import ExpenseItem from "./components/expenses/ExpenseItem";
import AllItems from "./AllItems.json";
import Card from './components/ui/Card';
import NewExpense from './components/NewForm/NewExpense';

const App = () => {

    function totalPrice(array, property){
        let sum = array.reduce(function(accu, obj){
            return accu + obj[property];
        }, 0);

        return sum;
    }

    return (
        <>
            <section>
                <NewExpense/>
                <Card className="expense-container">
                    <h2>Monthly Expenses</h2>
                    <div className="expenses-box">
                        {
                            AllItems.map(function(elm, index){
                                return (
                                    <ExpenseItem itemName={elm.itemName} itemPrice={elm.itemPrice} key={index} />
                                )
                            })
                        }
                        <p className="total-price">Total: ${totalPrice(AllItems, 'itemPrice')}</p>
                    </div>
                </Card>
            </section>
        </>
    )
}

export default App;