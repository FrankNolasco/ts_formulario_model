import { Radio } from "antd";
import { Fragment } from "react";
import { GeneralControlProps } from "../../../../types/interfaces";

const RadioControl = ({ hookForm, rest }: GeneralControlProps) => {
  /* SI OPTIONS TIENE TAMAÑO MAYOR A 5 SE RECOMIENDA USAR DROPDOWNS */
  return (
    <Radio.Group
      onChange={(e) => {
        rest.onChange && rest.onChange(e);
        hookForm.field.onChange(e);
      }}
      defaultValue={rest.defaultValue}
    >
      {rest.optionsDropdown && rest.optionLabel ? (
        <Fragment>
          {rest.optionsDropdown.map((el) => (
            <Radio value={rest.optionValue ? el[rest.optionValue] : el}>
              {rest.optionLabel ? el[rest.optionLabel] : el}
            </Radio>
          ))}
        </Fragment>
      ) : (
        <Fragment>
          <Radio value="SI">SI</Radio>
          <Radio value="NO">NO</Radio>
        </Fragment>
      )}
    </Radio.Group>
  );
};

export default RadioControl;
