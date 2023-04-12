import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = ({onExpenseDataChanged,setExpenseForm}) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const Data = {
      title:title,
      date:date,
      amount:amount,
    };
    // console.log(Data);
    onExpenseDataChanged(Data) 
    setTitle("");
    setAmount("");
    setDate("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            value={amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={(e) => {
              setDate(e.target.value);
            }}
            value={date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button   onSubmit={()=>{setExpenseForm()}} >Add Expense</button>
        <button type="button"  onClick={()=>{setExpenseForm()}} >cancel</button>

       
      </div>
    </form>
  );
};

export default ExpenseForm;
