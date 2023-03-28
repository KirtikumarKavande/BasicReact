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
        <button onClick={()=>{
          setExpense("updated!!!")
        
          console.log(expense)
        }}>change Expense</button>
        {/* <div className='expense-item__price'>{props.location}</div> */}

        <button onClick={deleteHandle}>delete</button>
    </div>
  )
}

export default ExpenseDetails