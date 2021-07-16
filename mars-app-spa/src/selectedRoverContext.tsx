import { createContext } from "react";
import { CameraI, RoverFullI } from "./nasaInterfaces";
import { UpdatableRover } from "./UpdatableRover";

export const selectedRoverContext = createContext<UpdatableRover>({
  setRover: (rover: RoverFullI) => { },
  setCamera: (camera: CameraI) => { },
});
