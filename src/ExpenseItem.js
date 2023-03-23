import React from "react";

const ExpenseItem = (props) => {
    console.log(props)
    const title="tea"
    const price=125
    const myDate=new Date()
    const LocationOfExpenditure="pune"
  return (
    <div>
      <div>{props.title}</div>
      <div>{props.price}</div>

      <div>{props.date}</div>

      <div>{props.LocationOfExpenditure}</div>
    </div>
  );
};

export default ExpenseItem;
