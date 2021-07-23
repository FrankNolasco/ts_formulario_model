import { Fragment, useEffect } from "react";
import { Button, Card } from "antd";
import { useForm } from "react-hook-form";
import FormField from "./FormField";
import FormControl from "./FormControl";
// import useToast from "App/Hooks/useToast";
// import { TOAST_FORMULARIO_NO_VALIDO } from "static/constants/toast_references";
import { Grid, Heading, Row } from "mylibs/Util-Styled-Components/src";
export interface IInputPayload {
  name: string;
  type:
    | "input"
    | "input-description"
    | "calendar"
    | "search"
    | "imagen"
    | "dropdown-prime"
    | "radio-button-input"
    | "switch";
  optionsDropdown?: any[];
  optionLabel?: string;
  optionValue?: string;
  customProps?: object;
  setOptionsDropdown?: Function;
  value?: any;
  setValue?: Function;
  required?: boolean;
  dropdownDependecyName?: string;
  defaultValue? : any;
  onChange? : (value : any) => void;
  disabled? : boolean;
  fullWidth?: boolean;
}
interface FormularioProps {
  inputs: IInputPayload[];
  submitAction: Function;
  submitLabel?: string | JSX.Element;
  title?: string | JSX.Element;
  getValue?: Function;
  descripcions?: JSX.Element | undefined | false;
  extra?: JSX.Element | undefined | false;
  elementType?: "row" | "column";
  onCancel?: Function;
  cancelLabel? : string | JSX.Element;
}

export const procesarLabel = (label: string, isSwitch: boolean) => {
  const str = label
    .replace("id", "")
    .replaceAll("_", " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2");
  return `${isSwitch ? "¿" : ""}${str}${isSwitch ? "?" : ""} :`;
};


function Formulario({
  inputs,
  submitAction,
  submitLabel = (
    <span>
      <i className="fa fa-save" style={{ width: 25 }}></i> Guardar
    </span>
  ),
  title,
  getValue,
  descripcions,
  extra,
  elementType = "row",
  onCancel,
  cancelLabel = "Cancelar"
}: FormularioProps) {
  const { register, handleSubmit, setValue } = useForm();
//   const toast = useToast(TOAST_FORMULARIO_NO_VALIDO)
//   const { goBack } = useHistory()
  const onSubmit = (data: any) => submitAction(data);
  useEffect(() => {
    inputs.forEach((input) => {
      register(input.name, {
        required:
          typeof input.required === "undefined" ? false : input.required,
      });
    });
    inputs.forEach((input)=> {
      input.defaultValue && setValue(input.name,input.defaultValue)
    })
    return () => {};
  }, [inputs, register]);
  return (
    <Card title={title ? <Heading>{title}</Heading> : null}>
      {descripcions && descripcions }
      <form onSubmit={handleSubmit(onSubmit,() => { // toast.iniciar()
      })}>
        <Grid cols={2} gap="20px 10px">
          {inputs.map((input, idx) => <Fragment>
            {!input.disabled && 
              <FormField
                key={idx}
                direction={elementType}
                required={input.required}
                fieldName={input.name}
                isCheker={input.type === "switch"}
              >
                <FormControl
                  control={input}
                  setValue={setValue}
                  getValue={getValue}
                />
              </FormField>
            }
          </Fragment>)}
        </Grid>
        {extra && extra }
        <Row justifyContent="flex-end" gap="10px" margin="20px 0 0 0">
          <Button htmlType="button" type="text" onClick={ () => onCancel ? onCancel() : () => {}}>
          {/* <Button htmlType="button" type="text" onClick={ () => onCancel ? onCancel() : goBack()}> */}
            {cancelLabel}
          </Button>
          <Button htmlType="submit" type="primary">
            {submitLabel}
          </Button>
        </Row>
      </form>
    </Card>
  );
}

export default Formulario;
