import React, { useState } from "react";
import { numPerPage } from "../constants";
import { PhotoI } from "../nasaInterfaces";
import { PhotoFC } from "./PhotoFC";
import "../Styles/PhotoCollectionFC.css";

export const PhotoCollection: React.FC<{ photos: PhotoI[] }> = ({ photos }) => {
    const [pagination, setPagination] = useState({ start: 0, end: numPerPage });

    if (photos.length === 0) {
        return <p>No photos available</p>;
    }
    const photoList = photos
        .map((photo: PhotoI) => {
            return <PhotoFC photo={photo} />;
        })
        .slice(pagination.start, pagination.end);

    const moveLeft = () => {
        const newStart = Math.max(pagination.start - numPerPage, 0);
        const newEnd = newStart + numPerPage;
        setPagination({ start: newStart, end: newEnd });
    };
    const moveRight = () => {
        const newStart = Math.min(
            pagination.start + numPerPage,
            photos.length - 1
        );
        const newEnd = newStart + numPerPage;
        setPagination({ start: newStart, end: newEnd });
    };

    const leftButton = (
        <button>
            <img src="./Images/NASAlogo.png" alt="<" onClick={moveLeft} />
        </button>
    );
    const rightButton = (
        <button>
            <img src="./Images/NASAlogo.png" alt=">" onClick={moveRight} />
        </button>
    );
    console.log("Pagination start: " + pagination.start);
    console.log("Pagination end: " + pagination.end);
    return (
        <>
            {leftButton}
            {rightButton}
            <div className="flexDiv">{photoList}</div>
        </>
    );
};
