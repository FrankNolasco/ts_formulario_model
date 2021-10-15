import { Checkbox } from "antd";
import { GeneralControlProps } from "../../../../types/interfaces";

const CheckBoxControl = ({ hookForm, rest }: GeneralControlProps) => {
  return (
    <div>
      <Checkbox.Group
        options={rest.optionsDropdown}
        defaultValue={rest.defaultValue}
        onChange={(e) => {
          rest.onChange && rest.onChange(e);
          hookForm.field.onChange(e);
        }}
      />
    </div>
  );
};

export default CheckBoxControl;
