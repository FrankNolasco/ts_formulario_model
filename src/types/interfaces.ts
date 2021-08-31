export interface IReducerNotifyStore {
  severity: "info" | "success" | "error" | "warn";
  summary: JSX.Element | string;
  detail: JSX.Element | string;
  sticky?: boolean;
  closable?: boolean;
}


export type ControlType = "input"
| "imagen"
// | "search"
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
export interface FormProps {
  title?: string | JSX.Element;
  formDescription?: string | JSX.Element;
  descriptions? : JSX.Element | JSX.Element[] | undefined | false;
  inputs: IInputPayload[];
  extra?: JSX.Element | JSX.Element[] | undefined | false;
  fieldOrganization?: "row" | "column";
  submitLabel? : string | JSX.Element;
  cancelLabel?: string | JSX.Element;
  onSubmit: (data? : any) => void;
  onCancel?: () => void;
  width?: string;
}


export interface GeneralControlProps {
  rest: IInputPayload;
  hookForm: any;
}