import React from "react";
import ExpenseItem from "./ExpenseItem";

const App = () => {

const data=[
{
  title:"e1",
  price:21,
  date:new Date().toDateString(),
  LocationOfExpenditure:"pune"
},
{
  title:"e2",
  price:21,
  date:new Date().toDateString(),
  LocationOfExpenditure:"Mumbai"
},
{
  title:"e3",
  price:21,
  date:new Date().toDateString(),
  LocationOfExpenditure:"Kolhapur"
},
]


  return (
    <>
<ExpenseItem title={data[0].title} price={data[0].price} date={data[0].date} LocationOfExpenditure={data[0].LocationOfExpenditure}/>
<ExpenseItem title={data[1].title} price={data[1].price} date={data[1].date} LocationOfExpenditure={data[1].LocationOfExpenditure}/>
<ExpenseItem title={data[2].title} price={data[2].price} date={data[2].date} LocationOfExpenditure={data[2].LocationOfExpenditure}/>

</>
  );
};

export default App;
