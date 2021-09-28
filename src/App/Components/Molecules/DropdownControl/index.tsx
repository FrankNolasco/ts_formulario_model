import Select from "react-dropdown-select";
import { GeneralControlProps } from "../../../../types/interfaces";

const DropdownControl = ({hookForm, rest}: GeneralControlProps) => {
  return (
    <div>
      {
        rest.optionsDropdown ?  <Select
          values={hookForm.field.value}
          options={rest.optionsDropdown}
          labelField={rest.optionLabel}
          valueField={rest.optionValue}
          searchBy={rest.optionLabel}
          dropdownGap={5}
          clearable
          searchable  
          dropdownPosition="auto"
          onChange={hookForm.field.onChange}
          { ...rest.customProps }
        /> : "Problema al carga este elemento..."
      }
    </div>
    
  );
};

export default DropdownControl;
