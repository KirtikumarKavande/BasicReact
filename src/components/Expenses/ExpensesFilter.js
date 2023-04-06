import React, { useState } from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = ({dataPass}) => {
  const [yearData,setYearData]=useState("2022")

     dataPass(yearData)

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={(e)=>{setYearData(e.target.value)}}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;