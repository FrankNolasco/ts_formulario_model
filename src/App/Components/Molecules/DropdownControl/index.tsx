import Select from "react-dropdown-select";
import { GeneralControlProps } from "types/interfaces";

const DropdownControl = ({hookForm, rest}: GeneralControlProps) => {
  
  return (
    <Select
      values={[]}
      options={[
        { name: "frank" },
        { name: "gogeta" },
        { name: "goku ssj" },
        { name: "goku ssj 2" },
      ]}
      labelField="name"
      searchBy="name"
      dropdownGap={5}
      clearable
      searchable
      dropdownPosition="auto"
      onChange={hookForm.onChange}
    />
  );
};

export default DropdownControl;