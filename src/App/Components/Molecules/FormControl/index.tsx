import { Control } from "./Control";
import { FormControlStyled } from "./styled";
import { IInputPayload } from "../../../../types/interfaces";
import { Controller, useFormContext } from "react-hook-form";
import { useEffect } from "react";
interface Props extends IInputPayload {
  orientation?: "row" | "column" | undefined;
}
const ProcesarLabel = (label: string) =>
  label
    .replaceAll(/([a-z])([A-Z])/g, "$1 $2")
    .replaceAll("_", " ")
    .replaceAll("-", " ");
const FormControl = ({ orientation, ...rest }: Props) => {
  const {
    register,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formState: { errors },
  } = useFormContext();
  useEffect(() => {
    register(rest.name, {
      required: typeof rest.required === "undefined" ? false : rest.required,
    });
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FormControlStyled orientation={orientation} fullWidth={rest.fullWidth} disabled = {rest.disabled}>
      <strong className="label-input">
        {ProcesarLabel(rest.name)} <strong> {rest.required && "*"} </strong>
      </strong>
      <div className="content-input">
        <Controller
          name={rest.name}
          render={(hookForm) => (
            <Control type={rest.type} rest={rest} hookForm={hookForm} />
          )}
          defaultValue={rest.defaultValue}
        />
      </div>
    </FormControlStyled>
  );
};
export default FormControl;
