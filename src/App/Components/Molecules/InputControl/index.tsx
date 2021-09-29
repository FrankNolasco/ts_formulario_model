import { Input } from "antd";
import { GeneralControlProps } from "../../../../types/interfaces";

const InputControl = ({ rest, hookForm }: GeneralControlProps) => {
  return (
    <div>
      <Input
        onChange={(e) => {
          rest.onChange && rest.onChange(e);
          hookForm.field.onChange(e);
        }}
        defaultValue={rest.defaultValue}
      />
    </div>
  );
};

export default InputControl;
