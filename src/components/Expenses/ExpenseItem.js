import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

    return (
       <list> 
        <Card className="expense-item">
            {/* If we have a component that has no content between opening and closing tag, we can write it as a self-closing element like <ExpenseDate/> */}
            <ExpenseDate date = {props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
            </div>
            <div className="expense-item__price">Rs {props.amount}</div>
        </Card>
       </list> 
    );
}

export default ExpenseItem;
