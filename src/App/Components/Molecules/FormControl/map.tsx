import { IInputPayload } from "types/interfaces";
import CalendarControl from "../CalendarControl";
import CheckBoxControl from "../CheckBoxControl";
import CheckBoxInputControl from "../CheckBoxInputControl";
import DropdownControl from "../DropdownControl";
import ImagenControl from "../ImagenControl";
import InputControl from "../InputControl";
import InputDesControl from "../InputDesControl";
import RadioControl from "../RadioControl";
import RadioInputControl from "../RadioInputControl";
import SearchControl from "../SearchControl";
import SwitchControl from "../SwitchControl";
import SwitchInputControl from "../SwitchInputControl";
export const element = (rest: IInputPayload, hookForm: any) => {
  const Props = { rest, hookForm };
  return {
    input: <InputControl {...Props} />,
    imagen: <ImagenControl {...Props} />,
    search: <SearchControl {...Props} />,
    switch: <SwitchControl {...Props} />,
    calendar: <CalendarControl {...Props} />,
    dropdown: <DropdownControl {...Props} />,
    checkbox: <CheckBoxControl {...Props} />,
    "radio-button": <RadioControl {...Props} />,
    "input-description": <InputDesControl {...Props} />,
    "radio-button-input": <RadioInputControl {...Props} />,
    "checkbox-button-input": <CheckBoxInputControl {...Props} />,
    "switch-button-input": <SwitchInputControl {...Props} />,
  };
};
