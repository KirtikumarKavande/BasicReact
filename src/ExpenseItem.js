import React from "react";

const ExpenseItem = (props) => {
    const{title,price,date,LocationOfExpenditure}=props
   
    
  return (
    <div>
      <div>{title}</div>
      <div>{price}</div>

      <div>{date}</div>

      <div>{LocationOfExpenditure}</div>
    </div>
  );
};

export default ExpenseItem;
