import React from "react";
import Select from "react-select";

export const DropDownFC: React.FC<{
  options: { value: any; label: string }[];
  onSelect: (x: any) => void;
}> = ({ options, onSelect }) => {
  return (
    <Select
      options={options}
      onChange={(selectedOption) =>
        onSelect(selectedOption ? selectedOption.value : "")
      }
    />
  );
};
