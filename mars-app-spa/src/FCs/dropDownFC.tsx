import React from "react";
import Select from "react-select";
import "./dropDownFC.css";

export const DropDownFC: React.FC<{
  options: { value: any; label: string }[];
  onSelect: (x: any) => void;
}> = ({ options, onSelect }) => {
  return (
    <Select className="dropDownSelect"
      options={options}
      onChange={(selectedOption) =>
        onSelect(selectedOption ? selectedOption.value : "")
      }
    />
  );
};
