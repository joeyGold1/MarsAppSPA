import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { NASAinfoFC } from './FCs/NASAinfoFC';
import { ButtonCounterFC } from './FCs/ButtonCounterFC';

function App() {
  const [count,setCount] = useState(Number(localStorage.getItem('count')));

  useEffect(()=>{
    localStorage.setItem('count',count.toString());

  });

  return (
    <div className="App">
      <header className="App-header">
          <NASAinfoFC/>
          
          <button onClick={()=>{
            setCount(count+1);
            }}>
            Pressed {count} times
          </button>
          
          <button onClick={()=>{
            setCount(0);
          }}>
            Reset Counter

          </button>
        Button above pressed {count} times.
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );

}



export default App;
