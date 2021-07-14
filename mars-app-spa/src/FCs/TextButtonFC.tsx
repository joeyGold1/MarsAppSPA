import React, { useContext } from 'react';
import { counterContext } from '../App';
import { ButtonCounterFC } from './ButtonCounterFC';
type hasTitle ={
    title:string
  }
  

export const TextButtonFC:React.FC<hasTitle> =
  ({title}) => {
    const count = useContext(counterContext).countNum;
    const setCount = useContext(counterContext).setCountFn;
    return (
        <>
            <h2> {title} </h2>
            <ButtonCounterFC buttonText = "CountButton"
                            countVar = {count}
                            setCountFn = {setCount}
            />
        </>
    );
};
