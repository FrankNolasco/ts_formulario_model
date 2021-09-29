import { Radio } from "antd";
import { GeneralControlProps } from "../../../../types/interfaces";

const RadioControl = ({ hookForm, rest }: GeneralControlProps) => {
  return (
    <Radio.Group
      onChange={(e) => {
        rest.onChange && rest.onChange(e);
        hookForm.field.onChange(e);
      }}
      defaultValue={rest.defaultValue}
    >
      <Radio value={1}>SI</Radio>
      <Radio value={2}>NO</Radio>
    </Radio.Group>
  );
};

export default RadioControl;
