import { Input } from "antd";
import { GeneralControlProps } from "../../../../types/interfaces";

const InputControl = ({ rest, hookForm }: GeneralControlProps) => {
  return (
    <div>
      <Input
        onChange={hookForm.field.onChange}
        defaultValue={rest.defaultValue}
      />
    </div>
  );
};

export default InputControl;
