import { useContext, useEffect, useState } from "react";
import Select from "react-select";
import { selectedRoverContext } from "../selectedRoverContext";
import { DropDownFC, DropDownProps } from "./dropDownFC";


export const PageNumberDownFC : React.FC<{currentPage:number,maxPage:number,setPageNum:(x:number)=>void}> = 
    (({currentPage,maxPage,setPageNum})=>{
        const possiblePages = Array.from(Array(maxPage).keys()).map(i => {
                return { value: i, label:i.toString() };
        });

        return (
        <>
            <Select
            options={possiblePages}
            onChange={(page) => setPageNum(page ? page.value : currentPage)}
            setValue = {() => currentPage }
            />
        </>

        )  
    });