import React, { useContext, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { NASAinfoFC } from './FCs/NASAinfoFC';
import { ButtonCounterFC } from './FCs/ButtonCounterFC';
import { TextButtonFC } from './FCs/TextButtonFC';

interface CounterContextI {
  countNum :number
  setCountFn : React.Dispatch<React.SetStateAction<number>>
}


export const counterContext = React.createContext<CounterContextI>({
  countNum:0, setCountFn:(()=>{})
});

function App() {
  const [count,setCount] = useState(Number(localStorage.getItem('count')));

  useEffect(()=>{
    localStorage.setItem('count',count.toString());

  });
  return (
    <counterContext.Provider value= {{countNum:count, setCountFn:setCount}}>
      <div className="App">
        <header className="App-header">
            {/* <NASAinfoFC/>
            <ButtonCounterFC  buttonText = "CountButton"
                              countVar = {count}
                              setCountFn = {setCount}
            /> */}
            <TextButtonFC title = "The Great Counter Button"/>
            <button onClick={()=>{
              setCount(0);
            }}>
              Reset Counter

            </button>
          <Container3FC/>
        </header>
      </div>
    </counterContext.Provider>
  );
}

const Container3FC : React.FC = 
  ({}) => {return (
    <>
      <p>I am container 3</p>
      <Container4FC/>
      <p>I am still container 3</p>
    </>
  );}

  const Container4FC : React.FC = 
  ({}) => {
    const count = useContext(counterContext).countNum;
    return (
    <>
      <p>I am container 4 and I know the button has been pressed {count} times</p>
    </>
  );}
export default App;
