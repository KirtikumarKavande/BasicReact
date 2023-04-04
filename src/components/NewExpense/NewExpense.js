import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";



const NewExpense = ({dataInApp}) => {

  function onExpenseDataChanged(myData) {
  const expenseData = {
    ...myData,
    id: Math.random(),
  }
 console.log("first",expenseData) 

}
  return (
    <div className="new-expense">
      <ExpenseForm onExpenseDataChanged={onExpenseDataChanged} />
    </div>
  );
};

export default NewExpense;
