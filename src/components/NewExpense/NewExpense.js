import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ dataInApp }) => {
  const [expenseForm, setExpenseForm] = useState(false);
  function onExpenseDataChanged(myData) {
    const expenseData = {
      ...myData,
      id: Math.random(),
    };
    dataInApp(expenseData);
  }

  function makeUnvisible() {
    setExpenseForm(false);
  }
  return (
    <div className="new-expense">
      {!expenseForm && (
        <button
          onClick={() => {
            setExpenseForm(true);
          }}
        >
          Add New Expenses
        </button>
      )}
      {expenseForm && (
        <ExpenseForm
          onExpenseDataChanged={onExpenseDataChanged}
          expenseForm={expenseForm}
          makeUnvisible={makeUnvisible}
        />
      )}
    </div>
  );
};

export default NewExpense;
