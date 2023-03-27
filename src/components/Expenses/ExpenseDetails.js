import React from 'react'

const ExpenseDetails = (props) => {
  function deleteHandle (){
console.log("deleted")
  }
  return (
    <div>
      <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        {/* <div className='expense-item__price'>{props.location}</div> */}

        <button onClick={deleteHandle}>delete</button>
    </div>
  )
}

export default ExpenseDetails