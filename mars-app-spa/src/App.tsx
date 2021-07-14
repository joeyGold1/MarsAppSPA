import React, { useContext, useEffect, useState } from 'react';
import Select from 'react-select';
import './App.css';
import { DropDownFC } from './FCs/dropDownFC';
import getFromApi from './getFromApi';
import { RoverI } from './nasaInterfaces';

const func = async () => {
  return ;
}

function App() {
  const [rovers, setRovers] = useState<RoverI[]>([]);

  useEffect(() => { (async () => {
      console.log("oiahwe");
        setRovers((await getFromApi<RoverI[]>('http://localhost:8000/rovers/')));
    })()}, []
  );
  const dropDownOptions = rovers.map((rover)=>{return {value:rover.name,label:rover.name}});
  return (
      <div className="App">
        <header className="App-header">
        <p>Rover Drop Down:</p>
        <DropDownFC options={dropDownOptions}/>
        </header>
      </div>
  );
}

export default App;
