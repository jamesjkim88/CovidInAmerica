import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import apiService from '../../utils/apiService';
import Covid19Numbers from '../../components/Covid19Numbers/Covid19Numbers';
import Covid19Charts from '../../components/Covid19Charts/Covid19Charts';


export default function Homepage({lat, long}){
  const [chartState, setChartState] = useState('confirmed-cases');
  const [covid19TestData, setCovid19TestData] = useState({});
  const [covid19Actuals, setCovid19Actuals] = useState({});
  const [covid19ActualTimeSeries, setCovid19ActualTimeSeries] = useState([]);

  async function getCovid19TestData(){
    try{
      const data = await apiService.getCovid19TestData();
      setCovid19TestData(data);
      setCovid19Actuals(data.actuals)
      setCovid19ActualTimeSeries(data.actualsTimeseries);
    }catch(err){
      console.log(err);
    }
  }

  function onHandleClick(evt){
    evt.preventDefault();
    console.dir(evt.target);
    setChartState(evt.target.id);
    switch(chartState) {
      case 'confirmed-cases':
        console.log("confirmed")
        break;
      case 'confirmed-deaths':
        console.log("sad days");
        break;
      case 'total-vax':
        console.log("changes are coming");
        break;
    }
  }


  useEffect(() => {
    getCovid19TestData()
  }, [])

  return(
    <>
      <NavBar />
      <div className="container data-container">
      <h1>{lat} : {long} {covid19TestData.state}, {covid19TestData.country}</h1>
      <div>
      </div>
      <br />
        <Covid19Numbers covid19Actuals={covid19Actuals} onHandleClick={onHandleClick} chartState={chartState}/>
        <br/>
        <Covid19Charts covid19ActualTimeSeries={covid19ActualTimeSeries} chartState={chartState}/>
      </div>
      {/* DEAD SPACE */}
      {/* 
        *
        *
        * 
        * 
        * 
        * 
        * 
        * 
        * 
        * 
        * 
        * 
        * 
       */}
      {/* DEAD SPACE */}
      {/* ***
      PLANNER
      *****/}
      {/* DEAD SPACE */}
      <ul>
        <li><h3>Tasks:</h3></li>
        <li>install libs needed</li>
        <li>break down what static and resuable components needed</li>
        <li>logic for comma rendering for location</li>
        <li>convert lat and long to city, state, county, legit user location data</li>
        <li>apply recharts for graphs</li>
      </ul>
    </>
  )
}