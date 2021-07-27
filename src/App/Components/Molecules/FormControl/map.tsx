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
export const element = (rest : any) => {
    return {
        "input" : <InputControl {...rest}/>,
        "imagen" : <ImagenControl {...rest}/>,
        "search" : <SearchControl {...rest}/>,
        "switch" : <SwitchControl {...rest}/>,
        "calendar" : <CalendarControl {...rest}/>,
        "dropdown" : <DropdownControl {...rest}/>,
        "checkbox" : <CheckBoxControl {...rest}/>,
        "radio-button" : <RadioControl {...rest}/>,
        "input-description" : <InputDesControl {...rest}/>,
        "radio-button-input" : <RadioInputControl {...rest}/>,
        "checkbox-button-input" : <CheckBoxInputControl {...rest}/>,
        "switch-button-input" : <SwitchInputControl {...rest}/>,
    }
}