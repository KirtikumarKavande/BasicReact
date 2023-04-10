import React, { useEffect, useState } from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = ({ dataPass, arrayData, filterPass }) => {
  const [yearData, setYearData] = useState("2022");

  dataPass(yearData);

  const filteredArraydata = arrayData.filter((item) => {
    return yearData === item.date.getFullYear().toString();
  });
  console.log("filter", filteredArraydata);
  useEffect(()=>{
    filterPass(filteredArraydata);

  },[yearData])
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select
          onChange={(e) => {
            setYearData(e.target.value);
          }}
        >
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
