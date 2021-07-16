import React, { Component, useEffect, useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { PhotoI } from "../nasaInterfaces";
import "../Styles/PhotoFC.css";

export const PhotoFC: React.FC<{ photos: PhotoI[],index:number }> = ({ photos,index }) => {
  const [isOpen ,setState] = useState(false)
  const [currentIndex ,setIndex] = useState(index);

  useEffect(()=>{
    setIndex(index);
  }, [])

  return (
    <>
    <img className="marsPhoto" src= {photos[index].img_src} onClick={()=>{setState(true);}} />

      {isOpen && (
          <Lightbox
            mainSrc= {photos[currentIndex].img_src}
            nextSrc= {photos[(currentIndex + 1) % photos.length].img_src}
            prevSrc= {photos[(currentIndex + photos.length - 1) % photos.length].img_src}
            onCloseRequest = {() => {
              setState(false);
              setIndex(index);            
              }
            }
            imageTitle = {"Photo taken by "+ photos[currentIndex].rover.name + " on " + photos[currentIndex].earth_date + " by " + photos[currentIndex].camera.full_name}
            onMovePrevRequest={() =>
              setIndex(
                (currentIndex + photos.length - 1) % photos.length,
              )
            }
            onMoveNextRequest={() =>
              setIndex(
                (currentIndex + 1) % photos.length,
              )
            }
          />
        )}
    </>
  );
};
