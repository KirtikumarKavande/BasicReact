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
    {
      data.map((item)=>{
        
        return(
          <>
<ExpenseItem {...item}/>
          
          </>
        )
      })
    }

</>
  );
};

export default App;
