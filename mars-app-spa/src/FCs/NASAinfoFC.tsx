import NASAlogo from './Images/NASAlogo.png';
import React from 'react';
import { TitleParagraphsImageFC } from './TitleParagraphsImageFC';

export const NASAinfoFC : React.FC = 
    (()=>{
        return (
            <>
                <TitleParagraphsImageFC title      = "NASA Info"
                                        paragraph1 = "NASA goes to space a lot"
                                        paragraph2 = "They used to go to the moon but not so much nowadays."
                                        image      = { NASAlogo }
/>
            </>
        )
    });