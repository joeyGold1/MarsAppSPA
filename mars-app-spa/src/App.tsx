import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import getFromApi from './getFromApi';
import { RoverI } from './nasaInterfaces';

const func = async () => {
  return ;
}

function App() {
  const [text, setText] = useState("defaultText");

  useEffect(() => { (async () => {
      console.log("oiahwe");
        setText((await getFromApi<RoverI[]>('http://localhost:8000/rovers/'))
          .map(rover => rover.name).join());
      
    })()}, []
  );
  
  return (
      <div className="App">
        <header className="App-header">
        <p>{text}</p>
        </header>
      </div>
  );
}

export default App;
