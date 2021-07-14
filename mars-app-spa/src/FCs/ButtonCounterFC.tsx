import { setUncaughtExceptionCaptureCallback } from 'process';
import React, { useState } from 'react';

type buttonCounterProps = {
    buttonText:string;
    countVar: number;
    setCountFn: (a:number) => void;
}

export const ButtonCounterFC: React.FC <buttonCounterProps> = (
    (({buttonText,countVar,setCountFn})=>{
        
        return  (
            <>
                <button onClick={() => setCountFn(countVar + 1)}>
                    {buttonText}
                </button>
            </>
        )
    })
)