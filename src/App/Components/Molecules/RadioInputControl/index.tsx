import { Input, Radio } from "antd";
import { Row } from "mylibs/Util-Styled-Components/src";
import { Fragment } from "react";
import { GeneralControlProps } from "../../../../types/interfaces";

const RadioInputControl = ({ hookForm, rest }: GeneralControlProps) => {
  return (
    <Row>
      <Radio.Group
        onChange={(e) => {
          const valChange = { ...hookForm.field.value, radio: e.target.value };
          rest.onChange && rest.onChange(valChange);
          hookForm.field.onChange(valChange);
        }}
        defaultValue={rest.defaultValue ? rest.defaultValue.radio : undefined}
      >
        {rest.optionsDropdown ? (
          <Fragment>
            {rest.optionsDropdown.map(
              (el) =><Radio value={rest.optionValue ? el[rest.optionValue] : el}>{rest.optionLabel ? el[rest.optionLabel] : el}</Radio>
            )}
          </Fragment>
        ) : (
          <Fragment>
            <Radio value="SI">SI</Radio>
            <Radio value="NO">NO</Radio>
          </Fragment>
        )}
      </Radio.Group>
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

export default RadioInputControl;
