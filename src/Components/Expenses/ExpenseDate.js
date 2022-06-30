import React from 'react'

import './ExpenseDate.css'

const ExpenseDate = (props) => {
    const Year = props.date.getFullYear();
    const Month = props.date.toLocaleDateString('en-us',{month:'long'});
    const Day = props.date.getDate();
  return (
    <div className='expense-date'>
     <div className='expense-date__Year'>{Year}</div>
        <div className='expense-date__month'>{Month}</div>
        <div className='expense-date__day'>{Day}</div>
    </div>
  )
}

export default ExpenseDate