export interface IReducerNotifyStore {
  severity: "info" | "success" | "error" | "warn";
  summary: JSX.Element | string;
  detail: JSX.Element | string;
  sticky?: boolean;
  closable?: boolean;
}


export type ControlType = "input"
| "imagen"
| "search"
| "switch"
| "calendar"
| "dropdown"
| "checkbox"
| "radio-button"
| "input-description"
| "radio-button-input"
| "switch-button-input"
| "checkbox-button-input"
export interface IInputPayload {
  name: string;
  type: ControlType;
  optionsDropdown?: any[];
  optionLabel?: string;
  optionValue?: string;
  customProps?: object;
  setOptionsDropdown?: Function;
  value?: any;
  setValue?: Function;
  required?: boolean;
  dropdownDependecyName?: string;
  defaultValue?: any;
  onChange?: (value: any) => void;
  disabled?: boolean;
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
  cancelLabel?: string | JSX.Element;
}
