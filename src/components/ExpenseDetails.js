import React from 'react'

const ExpenseDetails = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        <div className='expense-item__price'>{props.location}</div>
    </div>
  )
}

export default ExpenseDetails