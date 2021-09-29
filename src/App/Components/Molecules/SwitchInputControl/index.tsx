import { Input, Switch } from "antd";
import { Row } from "mylibs/Util-Styled-Components/src";
import { GeneralControlProps } from "../../../../types/interfaces";

const SwitchInputControl = ({ hookForm, rest }: GeneralControlProps) => {
  return (
    <Row gap="10px">
      <Switch
        onChange={(value) => {
          const valChange = { ...hookForm.field.value, switch: value };
          rest.onChange && rest.onChange(valChange);
          hookForm.field.onChange(valChange);
        }}
        defaultChecked={
          rest.defaultValue ? rest.defaultValue.switch : undefined
        }
      />
      <Input
        onChange={(e) => {
          const valChange = { ...hookForm.field.value, input: e.target.value };
          rest.onChange && rest.onChange(valChange);
          hookForm.field.onChange(valChange);
        }}
        defaultValue={rest.defaultValue ? rest.defaultValue.input : undefined}
      />
    </Row>
  );
};

export default SwitchInputControl;
