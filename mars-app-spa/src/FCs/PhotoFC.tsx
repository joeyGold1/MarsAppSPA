import React from 'react';
import { PhotoI } from '../nasaInterfaces';


export const PhotoFC: React.FC<{photo:PhotoI}> = ({photo}) => 
{
    return (
     <>
        <img src = {photo.img_src}/>
     </>
    );
}

