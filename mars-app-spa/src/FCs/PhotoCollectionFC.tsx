import React, { useState } from "react";
import { numPerPage } from "../constants";
import { PhotoI } from "../nasaInterfaces";
import { PhotoFC } from "./PhotoFC";
import "../Styles/PhotoCollectionFC.css";
import { ArrowButton } from "./ArrowButton";
import { moveLeftRight } from "./MoveRightLeft";
import { PageNumberDownFC } from "./PageNumberDropDownFC";

export const PhotoCollection: React.FC<{ photos: PhotoI[] }> = ({ photos }) => {
    const [pagination, setPagination] = useState({ start: 0, end: numPerPage });
    const [page,setPage]              = useState(0)
    const [photoList,setPhotoList]    = useState<JSX.Element[]>(
        photos.map((photo: PhotoI,index:number) => {
            return <PhotoFC photos={photos} index={index}/>;
        }).             slice(pagination.start, pagination.end));
    const maxPage = Math.floor((photos.length-1)/numPerPage)

    if (photos.length === 0) {
        return <p>No photos available</p>;
    }


    const moveLeft = () => {
        console.log("Left button")
        const newPage = Math.max(page-1,0);
        const newPagination = {start:numPerPage*newPage,end: Math.min(numPerPage*(newPage+1),photos.length)};

        setPage(newPage);
        setPagination(newPagination);
        setPhotoList(photos.map((photo: PhotoI,index:number) => {
            return <PhotoFC photos={photos} index={index}/>;
            }).slice(pagination.start, pagination.end));
    };

    const moveRight = () => {
        console.log("Right button")

        const newPage = Math.min(page+1,maxPage);
        const newPagination = {start:numPerPage*newPage,end: Math.min(numPerPage*(newPage+1),photos.length)};
        setPage(newPage);
        setPagination(newPagination);
        setPhotoList(photos.map((photo: PhotoI,index:number) => {
            return <PhotoFC photos={photos} index={index}/>;
            }).slice(newPagination.start, newPagination.end));
    };
    if (page>maxPage) {
        setPage(maxPage+1);
        moveLeft();
    } 
    const rightButton = <ArrowButton onClick={moveRight}>&gt;</ArrowButton>;
    const leftButton = <ArrowButton onClick={moveLeft}>&lt;</ArrowButton>;
    
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
