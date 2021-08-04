import { Checkbox, Input } from "antd";
import { Row } from "mylibs/Util-Styled-Components/src";
import { GeneralControlProps } from "types/interfaces";

const plainOptions = ["Apple", "Pear", "Orange"];
const CheckBoxInputControl = ({ hookForm, rest }: GeneralControlProps) => {
  return (
    <Row gap="10px">
      <Checkbox.Group
        options={plainOptions}
        defaultValue={rest.defaultValue}
        onChange={hookForm.field.onChange}
      />
      <Input />
    </Row>
  );
};

export default CheckBoxInputControl;
