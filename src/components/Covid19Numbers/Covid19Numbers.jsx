import React, {useState} from 'react';

export default function Covid19Numbers({covid19Actuals, onHandleClick}){




  return(
    <div className="covid19-numbers">
    {/* <table align="center">
      <tr>
        <td>Confirmed</td>
        <td>Deaths</td>
        <td>Vaccinated</td>
      </tr>
      <tr>
        <td>{covid19Actuals.cases}</td>
        <td>{covid19Actuals.deaths}</td>
        <td>{covid19Actuals.vaccinationsCompleted}</td>
      </tr>
    </table> */}
    <div className="row">
      <span className="row-title" id="confirmed-cases" onClick={onHandleClick} data="confirmed">Confirmed</span>
      <span className="row-title" id="confirmed-deaths" onClick={onHandleClick}>Deaths</span>
      <span className="row-title" id="total-vax" onClick={onHandleClick}>Vaccinated</span>
    </div>
    <div className="row">
      <span className="row-title">{covid19Actuals.cases}</span>
      <span className="row-title">{covid19Actuals.deaths}</span>
      <span className="row-title">{covid19Actuals.vaccinationsCompleted}</span>
    </div>
  </div>
  )
}