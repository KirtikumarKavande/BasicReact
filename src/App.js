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
    {
      id: "e5",
      title: "old Desk (Wooden)",
      amount: 45,
      date: new Date(2022, 5, 12),
      location: "usa",
    },
  ];
  const [show, setShow] = useState(expenses);

  function dataInApp(data) {
    setShow((prevExpense) => {
      return [data, ...prevExpense];
    });
  }

  function dataPass(data) {
    console.log(data);
  }

  const filterPass = (filtereddata) => {
    setShow(filtereddata);
  };

  return (
    <div>
      <NewExpense dataInApp={dataInApp} />
      <ExpensesFilter
        dataPass={dataPass}
        arrayData={expenses}
        filterPass={filterPass}
      />

      {show?.map((item) => {
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
