import React from 'react'
import { PhotoI } from '../nasaInterfaces'
import { PhotoFC } from './PhotoFC'


export const PhotoCollection:React.FC<{photos:PhotoI[]}> = ({photos})=>
    {
        const photoList = photos.map((photo: PhotoI)=>{return (<PhotoFC photo={photo}/>)}) 
        return (
            <>
                <div>
                    {photoList}
                </div>
            </>
        )
    } 

