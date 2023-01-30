import React from 'react'
import ChartBar from './ChartBar'
import './Chart.css'

const Chart = (props) => {
  const dataValues = props.dataPoints.map(point => point.value);
  const maxValue = Math.amx(dataValues);

  return (
    <div className='Chart'>
      {props.dataPoints.map(dataPoint => <ChartBar value={dataPoint.value} maxValue={maxValue} label={dataPoint.label} key={dataPoint.label}/>)}
    </div>
  )
}

export default Chart;