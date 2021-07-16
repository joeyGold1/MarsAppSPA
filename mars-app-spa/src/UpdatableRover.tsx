import { CameraI, RoverFullI } from "./nasaInterfaces";

export type UpdatableRover = {
  rover?: RoverFullI;
  camera?: CameraI;
  setRover: (rover: RoverFullI) => void;
  setCamera: (camera: CameraI) => void;
};
