import React, { useState } from 'react'; // Earlier it was done like this, now no need to import react.
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Stationary',
    amount: 100,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'Fees',
    amount: 10000,
    date: new Date(2021, 3, 12)
  },
  {
    id: 'e3',
    title: 'Insurance',
    amount: 5432,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'Food',
    amount: 4301,
    date: new Date(2021, 5, 12),
  },
];

// function App() { // this can be created using arrow function also
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  // // This is how it is done in regular javascript (imperative)
  // document.createElement('p');
  // parseFloat.textContent = 'This is also visible!';
  // document.getElementById('root').append{para};

  // // Alternative to the below JSX code using React object(needs to import 'react')
  // return React.createElement(
  //   'div', 
  //   {}, 
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, {items: expenses})  
  // );
  // // 1: Element which should be created , 2: object that sets all the attributes of this element , 3: content between opening and closing div tags(we can have infinite number of arguments and not just the third argument that holds the content)

  // But with react we just have to define the endstate and it will generate the instructions behind the scenes to bring this onto the screen
  // This is using JSX(react import not needed)
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />  
      {/* onAddExpense can be named anything you want */}
      {/* starting with on is a convention which makes clear that it is a function pointer which has passed as our argument */}
      <Expenses items = {expenses} />
    </div>
  );
}

export default App;
