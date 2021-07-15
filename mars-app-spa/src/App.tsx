import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { CameraDropDownFC } from "./FCs/CameraDropDownFC";
import { DropDownFC } from "./FCs/dropDownFC";
import { RoverDropDownFC } from "./FCs/RoverDropDownFC";
import getFromApi from "./getFromApi";
import { CameraI, RoverFullI } from "./nasaInterfaces";
import { selectedRoverContext } from "./selectedRoverContext";

function App() {
  
  const [selectedRover, setSelectedRover] = useState<RoverFullI | undefined>();
  const [selectedCamera, setSelectedCamera] = useState<CameraI | undefined>();

  return (
    <selectedRoverContext.Provider
      value={{
        rover:selectedRover,
        camera:selectedCamera,
        setRover: setSelectedRover,
        setCamera: setSelectedCamera,
      }}
    >
      <div className="App">
        <header className="App-header">
          <RoverDropDownFC/>
          <CameraDropDownFC/>
        </header>
      </div>
    </selectedRoverContext.Provider>
  );
}

export default App;
