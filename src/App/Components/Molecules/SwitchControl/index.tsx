import { Switch } from "antd"
import { GeneralControlProps } from "types/interfaces"

const SwitchControl = ({hookForm}:GeneralControlProps) => {
    return (
        <div>
           <Switch onChange={hookForm.field.onChange}/> 
        </div>
    )
}

export default SwitchControl
