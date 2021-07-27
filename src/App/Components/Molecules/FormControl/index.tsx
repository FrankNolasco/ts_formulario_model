import { Control } from "./Control";
import { FormControlStyled } from "./styled";
import { IInputPayload } from "types/interfaces";
interface Props extends IInputPayload {
  orientation?: "row" | "column" | undefined;
}
const ProcesarLabel = (label: string) =>
  label
    .replaceAll(/([a-z])([A-Z])/g, "$1 $2")
    .replaceAll("_", " ")
    .replaceAll("-", " ");
const FormControl = ({ orientation, ...rest }: Props) => {
  return (
    <FormControlStyled orientation={orientation}>
      <strong className="label-input">
        {ProcesarLabel(rest.name)} <strong> {rest.required && "*"} </strong>{" "}
      </strong>
      <div className="content-input">
        <Control type={rest.type} rest={rest} />
      </div>
    </FormControlStyled>
  );
};
export default FormControl;
