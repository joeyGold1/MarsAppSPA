import React, { useContext, useEffect, useState, Component  } from 'react';
import Select from 'react-select'

export const DropDownFC:React.FC <{options:{value:string,label:string}[]}> = ({options}) => {
    return (
        <Select options={options}
                onChange = {(x) => console.log(x)}/>
    )
}