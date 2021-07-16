import React, { useState } from "react";
import "./Styles/App.css";
import { CameraI, PhotoI, RoverFullI } from "./nasaInterfaces";
import { selectedRoverContext } from "./selectedRoverContext";
import { PhotoCollection } from "./FCs/PhotoCollectionFC";
import { SendRequestButtonFC } from "./FCs/SendRequestButtonFC";
import { DataEntryFC } from "./FCs/dataEntryFC";
function App() {
  const [selectedRover, setSelectedRover] = useState<RoverFullI | undefined>();
  const [selectedCamera, setSelectedCamera] = useState<CameraI | undefined>();
  const [sol, setSol] = useState<number | undefined>();
  const thing = false;

  const [photos, setPhotos] = useState<PhotoI[]|undefined>();

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
          <DataEntryFC />
          {selectedRover && selectedCamera && (!!sol||sol==0) && <SendRequestButtonFC setPhotos={setPhotos} />}
          
          {(!!photos) && <PhotoCollection photos={photos} />}
        </header>
      </div>
    </selectedRoverContext.Provider>
  );
}

export default App;
