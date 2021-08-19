import { Switch } from "antd"
import { GeneralControlProps } from "../../../../types/interfaces"

const SwitchControl = ({hookForm,rest}:GeneralControlProps) => {
    return (
        <div>
           <Switch onChange={hookForm.field.onChange} defaultChecked={rest.defaultValue}/> 
        </div>
    )
}

export default SwitchControl
