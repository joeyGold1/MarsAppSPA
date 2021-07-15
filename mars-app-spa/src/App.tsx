import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import { DropDownFC } from "./FCs/dropDownFC";
import getFromApi from "./getFromApi";
import { CameraI, RoverFullI } from "./nasaInterfaces";
import { UpdatableRover } from "./UpdatableRover";

const selectedRoverContext = createContext<UpdatableRover>({
  setRover: (rover: RoverFullI) => {},
  setCamera: (camera: CameraI) => {},
});

function App() {
  const [rovers, setRovers] = useState<RoverFullI[]>([]);
  const [selectedRover, setSelectedRover] = useState<RoverFullI | undefined>();
  const [cameras, setCameras] = useState<CameraI[]>([]);
  const [selectedCamera, setSelectedCamera] = useState<CameraI | undefined>();

  useEffect(() => {
    (async () => {
      setRovers(
        await getFromApi<RoverFullI[]>("http://localhost:8000/rovers/")
      );
    })();
  }, []);

  useEffect(() => {
    setCameras(selectedRover ? selectedRover.cameras : []);
  }, [selectedRover]);

  const roverDropDownOptions = rovers.map((rover, index) => {
    return { value: index, label: rover.name };
  });
  const cameraDropDownOptions = cameras.map((camera, index) => {
    return { value: index, label: camera.name };
  });

  return (
    <selectedRoverContext.Provider
      value={{
        setRover: setSelectedRover,
        setCamera: setSelectedCamera,
      }}
    >
      <div className="App">
        <header className="App-header">
          <p>Rover Drop Down:</p>
          <DropDownFC
            options={roverDropDownOptions}
            onSelect={(index) => setSelectedRover(rovers[index])}
          />
          <p>Camera Drop Down:</p>
          <DropDownFC
            options={cameraDropDownOptions}
            onSelect={(index) => setSelectedCamera(cameras[index])}
          />
        </header>
      </div>
    </selectedRoverContext.Provider>
  );
}

export default App;
