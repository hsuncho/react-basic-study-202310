import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = ({ dataPoints }) => {
  // dataPoints 배열 안에는 12개의 객체가 들어있음
  return (
    <div className='chart'>
      {dataPoints.map((dp) => (
        <ChartBar
          key={dp.label}
          label={dp.label}
        />
      ))}
    </div>
  );
};

export default Chart;
