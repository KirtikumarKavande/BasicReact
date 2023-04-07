import { useState } from "react";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import ExpensesFilter from "./components/Expenses/ExpensesFilter";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: "pune",
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
      location: "delhi",
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location: "munbai",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      location: "kolhapur",
    },
  ];
const [show,setShow]=useState(expenses)
  function dataInApp(data) {
  
// return (
//   setShow([...expenses,data])
//   )

setShow((prevExpense)=>{
  return [data,...prevExpense]
})
  
  }

  function dataPass(data) {
    console.log(data);
  }

  return (
    <div>
      <NewExpense dataInApp={dataInApp} />
      <ExpensesFilter dataPass={dataPass} />
  

      {show.map((item) => {
        return (
          <>
            <ExpenseItem
            key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
              location={item.location}
            />
          </>
        );
      })}
    </div>
  );
}

export default App;
