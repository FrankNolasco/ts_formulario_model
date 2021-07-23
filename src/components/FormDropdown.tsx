import { useState } from "react";
// import { Dropdown, DropdownProps } from "primereact/dropdown";

interface DropdownForm {
    // interface DropdownForm extends DropdownProps {
  defaultValue? : any
}

const FormDropdown = (props: DropdownForm) => {
  const [dropdownValue, setDropdownValue] = useState<any>(props.defaultValue);
  return (<div></div>
    // <Dropdown
    //   {...props}
    //   value={dropdownValue}
    //   onChange={(e: any) => {
    //     setDropdownValue(e.target.value);
    //     props.onChange && props.onChange(e);
    //   }}
    // />
  );
};

export default FormDropdown;
