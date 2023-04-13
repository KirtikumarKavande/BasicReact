import React from 'react'
import ChartBar from './ChartBar';
import './Chart.css'


const Chart = ({chartDataPoints}) => {
   const arrayOfNum=chartDataPoints.map((item)=>(
         item.value
   ))
 const maxNum=Math.max(...arrayOfNum)
//  console.log(maxNum)
// console.log("---------------------------",chartDataPoints)
 return (
    <div className='chart'>
      {chartDataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxNum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart