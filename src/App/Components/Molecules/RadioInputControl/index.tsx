import { Input, Radio } from "antd";
import { Row } from "mylibs/Util-Styled-Components/src";
import { GeneralControlProps } from "types/interfaces";

const RadioInputControl = ({ hookForm, rest }: GeneralControlProps) => {
  return (
    <Row>
      <Radio.Group
        onChange={ (e) => hookForm.field.onChange({...hookForm.field.value, radio: e.target.value })}
        defaultValue={ rest.defaultValue ? rest.defaultValue.radio : undefined }
      >
        <Radio value={1}>SI</Radio>
        <Radio value={2}>NO</Radio>
      </Radio.Group>
      <Input 
        onChange={ (e) => hookForm.field.onChange({...hookForm.field.value, input: e.target.value })}
        defaultValue={ rest.defaultValue ? rest.defaultValue.input : undefined }
      />
    </Row>
  );
};

export default RadioInputControl;