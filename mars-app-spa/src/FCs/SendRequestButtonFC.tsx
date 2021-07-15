import React, { useContext } from "react";
import getFromApi from "../getFromApi";
import { PhotoI } from "../nasaInterfaces";
import { selectedRoverContext } from "../selectedRoverContext";

// type SendRequestButtonProps = {
//     setPhotos: (PhotoI[]) => void;
// }

export const SendRequestButtonFC: React.FC<{
  setPhotos: (photos: PhotoI[]) => void;
}> = ({ setPhotos }) => {
  const programContext = useContext(selectedRoverContext);
  const roverName = programContext.rover?.name;
  const cameraName = programContext.camera?.name;
  const sol = programContext.sol;

  return (
    <button
      onClick={async () => {
        setPhotos(
          await getFromApi(
            `http://localhost:8000/rovers/${roverName}/photos/${cameraName}/?sol=${sol}`
          )
        );
      }}
    >
      Show Photos
    </button>
  );
};
