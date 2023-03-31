import React, { useState } from 'react'

const ExpenseDetails = (props) => {
  const[expense,setExpense]=useState(props.amount)
  function deleteHandle (){
console.log("deleted")
  }
  return (
    <div>
      <h2>{props.title}</h2>
        <div className='expense-item__price'>${expense}</div>
        
        {/* <div className='expense-item__price'>{props.location}</div> */}

    </div>
  )
}

export default ExpenseDetails