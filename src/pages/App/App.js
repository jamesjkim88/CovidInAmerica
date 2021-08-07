import React, {useState} from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from '../Homepage/Homepage';
import './App.css';


function App() {
  const [long, setLong] = useState('');
  const [lat, setLat] = useState('');
  function success(pos){
    var crd = pos.coords;
    setLong(crd.longitude);
    setLat(crd.latitude)
  }

  navigator.geolocation.getCurrentPosition(success);

  return (
    <div className="App">
      <Switch>
          <Route exact path="/">
            <Homepage long={long} lat={lat}/>
          </Route>
      </Switch>
    </div>
  );
}

export default App;