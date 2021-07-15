import React, { useState } from "react";
import { numPerPage } from "../constants";
import { PhotoI } from "../nasaInterfaces";
import { PhotoFC } from "./PhotoFC";
import "../Styles/PhotoCollectionFC.css";

export const PhotoCollection: React.FC<{ photos: PhotoI[] }> = ({ photos }) => {
  const [pagination, setPagination] = useState({ start: 0, end: numPerPage });
  const photoList = photos
    .map((photo: PhotoI) => {
      return <PhotoFC photo={photo} />;
    })
    .slice(pagination.start, pagination.end);
  return (
    <>
      <div className="flexDiv">{photoList}</div>
    </>
  );
};
