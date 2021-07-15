import React, { useState } from "react";
import "./Styles/App.css";
import { CameraDropDownFC } from "./FCs/CameraDropDownFC";
import { RoverDropDownFC } from "./FCs/RoverDropDownFC";
import { SolInputFC } from "./FCs/SolInputFC";
import { CameraI, RoverFullI } from "./nasaInterfaces";
import { selectedRoverContext } from "./selectedRoverContext";

function App() {
  const [selectedRover, setSelectedRover] = useState<RoverFullI | undefined>();
  const [selectedCamera, setSelectedCamera] = useState<CameraI | undefined>();
  const [sol, setSol] = useState<number | undefined>();

  return (
    <selectedRoverContext.Provider
      value={{
        rover: selectedRover,
        camera: selectedCamera,
        sol: sol,
        setRover: setSelectedRover,
        setCamera: setSelectedCamera,
        setSol: setSol,
      }}
    >
      <div className="App">
        <header className="App-header">
          <h1>Mars Rover Photo App</h1>
          <RoverDropDownFC />
          <CameraDropDownFC />
          <SolInputFC />
        </header>
      </div>
    </selectedRoverContext.Provider>
  );
}

export default App;
