import { Checkbox } from "antd"
import { GeneralControlProps } from "../../../../types/interfaces";

const plainOptions = ['Apple', 'Pear', 'Orange'];


const CheckBoxControl = ({ hookForm, rest }:GeneralControlProps) => {
    
    return (
        <div>
            <Checkbox.Group options={plainOptions} defaultValue={rest.defaultValue}  onChange={hookForm.field.onChange} />
        </div>
    )
}

export default CheckBoxControl
