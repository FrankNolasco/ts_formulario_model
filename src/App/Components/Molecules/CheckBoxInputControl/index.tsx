import { Checkbox, Input } from "antd";
import { Row } from "mylibs/Util-Styled-Components/src";
import { GeneralControlProps } from "../../../../types/interfaces";

const plainOptions = ["Apple", "Pear", "Orange"];
const CheckBoxInputControl = ({ hookForm, rest }: GeneralControlProps) => {
  return (
    <Row gap="10px">
      <Checkbox.Group
        options={plainOptions}
        defaultValue={rest.defaultValue ? rest.defaultValue.checkbox : undefined}
        onChange={ (values) => hookForm.field.onChange({...hookForm.field.value, checkbox: values })}
      />
      <Input
        onChange={ (e) => hookForm.field.onChange({...hookForm.field.value, input: e.target.value })}
        defaultValue={ rest.defaultValue ? rest.defaultValue.input : undefined }
      />
    </Row>
  );
};

export default CheckBoxInputControl;
