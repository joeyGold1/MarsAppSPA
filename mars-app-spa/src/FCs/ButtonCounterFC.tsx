import { setUncaughtExceptionCaptureCallback } from 'process';
import React, { useState } from 'react';

type buttonCounterProps = {
    buttonText:string;
    count: number;
    setCount: (a: number) => number;
}

export const ButtonCounterFC: React.FC <buttonCounterProps> = (
    (({buttonText,count,setCount})=>{
        
        return  (
            <>
                <button onClick={() => setCount(count + 1)}>
                    {buttonText}
                </button>
            </>
        )
    })
)