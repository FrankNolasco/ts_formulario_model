import React, { useEffect, useState } from "react";
// import { RadioButton } from "primereact/radiobutton";
import { Input } from "antd";

interface Props {
  onChange?: Function;
  name : string,
  customProps? : any;
  defaultValue? : { radio : "SI" | "NO" ,input : any }
}

const FormRadioButtonInput = ({ onChange, name , customProps, defaultValue}: Props) => {
  const [inputValue, setInputValue] = useState("");
  const [radioButtonOption, setRadioButtonOption] = useState("NO");
  useEffect(() => {
    onChange && onChange({ radio: radioButtonOption, input: inputValue });
    return () => {};
  }, [onChange, inputValue, radioButtonOption]);

  useEffect(() => {
    if(defaultValue){
      setInputValue(defaultValue.input)
      setRadioButtonOption(defaultValue.radio)
    }
    return () => {}
  }, [defaultValue])
  
  return (
    <div className="flex-row-3 w-100" style={{ alignItems: "center" }}>
      <div
        className="flex-row-3 w-30"
        style={{ gap: "10px", justifyContent: "center", alignItems: "center" }}
      >
        <div className="p-field-radiobutton">
          {/* <RadioButton
            inputId={`${name}1`}
            name="SI"
            value="SI"
            onChange={(e) => setRadioButtonOption(e.target.value)}
            checked={radioButtonOption === "SI"}
          /> */}
          <label htmlFor={`${name}1`}>SI</label>
        </div>
        <div className="p-field-radiobutton">
          {/* <RadioButton
            inputId={`${name}2`}
            name="NO"
            value="NO"
            onChange={(e) => setRadioButtonOption(e.target.value)}
            checked={radioButtonOption === "NO"}
          /> */}
          <label htmlFor={`${name}2`}>NO</label>
        </div>
      </div>
      <Input
        {...customProps}
        disabled = {radioButtonOption !== "SI"}
        className="w-70"
        value={inputValue}
        onChange={({ target }) => setInputValue(target.value)}
      />
    </div>
  );
};

export default FormRadioButtonInput;
