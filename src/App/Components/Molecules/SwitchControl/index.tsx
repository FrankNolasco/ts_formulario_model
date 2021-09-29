import { Switch } from "antd";
import { GeneralControlProps } from "../../../../types/interfaces";

const SwitchControl = ({ hookForm, rest }: GeneralControlProps) => {
  return (
    <div>
      <Switch
        onChange={(e) => {
          rest.onChange && rest.onChange(e);
          hookForm.field.onChange(e);
        }}
        defaultChecked={rest.defaultValue}
      />
    </div>
  );
};

export default SwitchControl;
