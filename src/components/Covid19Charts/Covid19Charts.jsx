import React, {useEffect} from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function Covid19Charts({covid19ActualTimeSeries, chartState}){
  function lineGenerator(){
    if(chartState === "confirmed-cases"){
      return <Line type="linear" dataKey="cases" stroke="#8883ce" activeDot={{ r: 8 }} dot={false} strokeWidth={3}/>
    }
    else if(chartState === "confirmed-deaths"){
      return <Line type="linear" dataKey="deaths" stroke="#444" activeDot={{ r: 8 }}  dot={false} strokeWidth={3}/>
    }
    else if(chartState === "total-vax"){
      return <Line type="linear" dataKey="vaccinationsCompleted" activeDot={{ r: 8 }} stroke="#000080" dot={false} strokeWidth={3}/>
    }else{
      return <Line type="linear" dataKey="cases" stroke="#8883ce" activeDot={{ r: 8 }} dot={false} strokeWidth={3}/>
    }
  }

  function chartHeaderGenerator(){
    if(chartState === "confirmed-cases"){
      return <h3>Total Confirmed Cases</h3>
    }
    else if(chartState === "confirmed-deaths"){
      return <h3>Total Deaths</h3>
    }
    else if(chartState === "total-vax"){
      return <h3>Total Vaccinated</h3>
    }else{
      return <h3>Total Confirmed Cases</h3>
  }
}

  return(
    <>
    {chartHeaderGenerator()}
    <br />
    <ResponsiveContainer width="100%" height="100%">
    <LineChart
      width={500}
      height={300}
      data={covid19ActualTimeSeries}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date"/>
      <YAxis />
      <Tooltip />
      <Legend />
      {lineGenerator()}
    </LineChart>
  </ResponsiveContainer>
  </>
  )
}