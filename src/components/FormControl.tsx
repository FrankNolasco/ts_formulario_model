import { Input, Switch } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { useEffect } from 'react'
import FormCalendar from './FormCalendar';
import FormDropdown from './FormDropdown';
import FormImagenInput from './FormInputImagen';
import FormRadioButtonInput from './FormRadioButtonInput';
import { IInputPayload } from './Formulario';
const dateFormat = "dd/mm/yy";
interface formControlProps {
    control: IInputPayload;
    setValue: Function;
    getValue?: Function;
}
const FormControl = ({ control, setValue, getValue }: formControlProps) => {
  useEffect(() => {
    setValue(control.name,control.defaultValue)
    return () => {}
  }, [control.defaultValue])
    switch (control.type) {
      case "input":
        return (
          <Input
            defaultValue = {control.defaultValue}
            onChange={(e) => {
              setValue(control.name, e.target.value);
            }}
            {...control.customProps}
          />
        );
      case "input-description":
        return (
          <TextArea
            defaultValue = {control.defaultValue}
            onChange={(e) => {
              setValue(control.name, e.target.value);
            }}
            {...control.customProps}
          />
        );
      case "dropdown-prime":
        return (
          <FormDropdown
            defaultValue={control.defaultValue}
            // style={{ borderColor: "#d9d9d9", width: "100%" }}
            // optionValue={control.optionValue}
            // options={control.optionsDropdown}
            // optionLabel={control.optionLabel}
            // onChange={({ target } : any) => {
            //   control.onChange && control.onChange(target.value)
            //   setValue(control.name, target.value);
            // }}
            {...control.customProps}
          />
        );
      case "calendar":
        return (
          <FormCalendar
            defaultValue = {control.defaultValue}
            // onChange={(e) => {
            //   setValue(control.name, e.target.value);
            // }}
            {...control.customProps}
          />
        );
      case "search":
        return (
          <Input.Search
            defaultValue = {control.defaultValue}
            onChange={(e) => {
              setValue(control.name, e.target.value);
            }}
            required={
              typeof control.required === "undefined" ? false : control.required
            }
            {...control.customProps}
          />
        );
      case "switch":
        return (
          <div className="w-100">
            <Switch
              defaultChecked = {control.defaultValue}
              checkedChildren="SI"
              unCheckedChildren="NO"
              onChange={(checked) => {
                typeof control.setValue === "function"
                  ? control.setValue(checked)
                  : setValue(control.name, checked);
                if (control.dropdownDependecyName) {
                  setValue(control.dropdownDependecyName, undefined);
                }
              }}
              {...control.customProps}
            />
          </div>
        );
      case "radio-button-input":
        return <FormRadioButtonInput defaultValue={control.defaultValue} name={control.name} onChange = {(value : any)=> { setValue(control.name,value) }} customProps = {control.customProps}/>
      case "imagen" : 
        return <FormImagenInput name={control.name} />
      default:
        return <></>;
    }
  };

export default FormControl
