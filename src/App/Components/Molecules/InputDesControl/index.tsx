import TextArea from "antd/lib/input/TextArea";
import { GeneralControlProps } from "../../../../types/interfaces";

const InputDesControl = ({ hookForm, rest }: GeneralControlProps) => {
  return (
    <TextArea
      autoSize
      onChange={(e) => {
        rest.onChange && rest.onChange(e);
        hookForm.field.onChange(e);
      }}
      defaultValue={rest.defaultValue}
    />
  );
};

export default InputDesControl;
