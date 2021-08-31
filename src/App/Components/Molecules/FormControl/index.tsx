import { Control } from "./Control";
import { FormControlStyled } from "./styled";
import { IInputPayload } from "../../../../types/interfaces";
import { Controller, useFormContext } from "react-hook-form";
import { useEffect } from "react";
import { Badge } from "antd";
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
    formState: { errors },
  } = useFormContext();
  useEffect(() => {
    register(rest.name, {
      required: typeof rest.required === "undefined" ? false : rest.required,
    });
    return () => {};
  }, []);

  return (
    <FormControlStyled orientation={orientation} fullWidth={rest.fullWidth}>
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
      {/* {errors[rest.name] && <div className="error-message">
        <ErrorMessage
          errors={errors}
          name={rest.name}
          render={({ message }) => <Badge.Ribbon text="Campo obligatorio" color="#ff4800"/>}
        />
      </div>} */}
    </FormControlStyled>
  );
};
export default FormControl;
