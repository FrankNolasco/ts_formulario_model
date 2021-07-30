import { Checkbox } from "antd"
import { GeneralControlProps } from "types/interfaces";

const plainOptions = ['Apple', 'Pear', 'Orange'];


const CheckBoxControl = ({hookForm}:GeneralControlProps) => {
    
    return (
        <div>
            <Checkbox.Group options={plainOptions} defaultValue={['Apple']}  onChange={hookForm.field.onChange} />
        </div>
    )
}

export default CheckBoxControl
