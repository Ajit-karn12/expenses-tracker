import React, { useState } from 'react'
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';

import './Expenses.css'
import ExpensesChart from './ExpensesChart';



const Expenses = props => {
  const [filteredYear,setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear =>{
    setFilteredYear(selectedYear);

  }

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // let expensesContent = <p>No Expenses Found.</p>;

  // if(FilteredExpenses.length > 0){
  //   expensesContent =  FilteredExpenses.map((expense)=>(
  //     <ExpenseItem 
  //     key={expense.id}
  //     title={expense.title}
  //     amount={expense.amount}
  //     date={expense.date}
  //   />
  // ));
  // }
  
  return (
    <Card className='expenses'>
    <ExpenseFilter selected={filteredYear} 
      onChangeFilter={filterChangeHandler}/> 

      {/* {FilteredExpenses.length === 0 &&  <p>No Expenses Found.</p>}
       {FilteredExpenses.length > 0  && 
        FilteredExpenses.map((expense)=>(
      <ExpenseItem 
       key={expense.id}
       title={expense.title}
       amount={expense.amount}
       date={expense.date}
     />
   )) }; */}

   <ExpensesChart expenses={filteredExpenses}/>
   <ExpensesList items={filteredExpenses}/>
    </Card>
  )
}

export default Expenses