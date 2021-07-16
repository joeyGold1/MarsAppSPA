import React, { useState } from "react";
import { numPerPage } from "../constants";
import { PhotoI } from "../nasaInterfaces";
import { PhotoFC } from "./PhotoFC";
import "../Styles/PhotoCollectionFC.css";
import { ArrowButton } from "./ArrowButton";
import { moveLeftRight } from "./MoveRightLeft";

export const PhotoCollection: React.FC<{ photos: PhotoI[] }> = ({ photos }) => {
    const [pagination, setPagination] = useState({ start: 0, end: numPerPage });
    const [page,setPage]              = useState(0)
    const maxPage = Math.floor(photos.length/numPerPage)

    if (photos.length === 0) {
        return <p>No photos available</p>;
    }


    const moveLeft = () => {
        console.log("Left button")
        const newPage = Math.max(page-1,0);
        const newPagination = {start:numPerPage*newPage,end: Math.min(numPerPage*(newPage+1),photos.length)};
        setPage(newPage);
        setPagination(newPagination);
    };

    const moveRight = () => {
        console.log("Right button")

        const newPage = Math.min(page+1,maxPage);
        const newPagination = {start:numPerPage*page,end: Math.min(numPerPage*(page+1),photos.length)};
        setPage(newPage);
        setPagination(newPagination);
    };
    if (page>maxPage) {
        setPage(maxPage+1);
        moveLeft();
    } 
    const rightButton = <ArrowButton onClick={moveRight}>&gt;</ArrowButton>;
    const leftButton = <ArrowButton onClick={moveLeft}>&lt;</ArrowButton>;
    const photoList = photos
        .map((photo: PhotoI) => {
            return <PhotoFC photo={photo} />;
        })
        .slice(pagination.start, pagination.end);

    return (
        <>
            <div className="flexDiv">{photoList}</div>
            <div className="buttonsAndPageNums"> 
                <div className="leftButton"> {leftButton}</div>
                <div className="pageNumText">Page {page+1} of {maxPage+1}</div> 
                <div className="rightButton">{rightButton}</div>
            </div>
        </>
    );
};
