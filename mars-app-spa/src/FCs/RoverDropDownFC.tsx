import React, { useContext, useEffect, useState } from 'react';
import getFromApi from '../getFromApi';
import { RoverFullI } from '../nasaInterfaces';
import { selectedRoverContext } from '../selectedRoverContext';
import { DropDownFC } from './dropDownFC';

export const RoverDropDownFC : React.FC = 
    (()=>{
        const programContext = useContext(selectedRoverContext);
        const [rovers, setRovers] = useState<RoverFullI[]>([]);
        const roverDropDownOptions = rovers.map((rover, index) => {
            return { value: index, label: rover.name };
        });
        useEffect(() => {
            (async () => {
              setRovers(
                await getFromApi<RoverFullI[]>("http://localhost:8000/rovers/")
              );
            })();
          }, []);
        return (
            <>
                <p>Rover Drop Down:</p>
                <DropDownFC
                    options={roverDropDownOptions}
                    onSelect={(index) => programContext.setRover(rovers[index])}
                />
            </>

        )
    });