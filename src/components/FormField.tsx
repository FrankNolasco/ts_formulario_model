import { procesarLabel } from "./Formulario";
import {
  FormControlStyled,
  FormFieldStyled,
  LabelName,
  Required,
} from "./styled";
interface Props {
  children: any;
  required?: boolean;
  fieldName?: string;
  isCheker?: boolean;
  style?: any;
  direction?: "row" | "column";
}

const FormField = ({
  children,
  required = false,
  fieldName,
  isCheker = false,
  style = {},
  direction = "row",
}: Props) => (
  <FormFieldStyled style={style}>
    <LabelName>
      <Required isRequired={required}>*</Required>
      {fieldName && procesarLabel(fieldName, isCheker)}
    </LabelName>
    <FormControlStyled>{children}</FormControlStyled>
  </FormFieldStyled>
);

export default FormField;
