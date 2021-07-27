import { Checkbox } from "antd"

const plainOptions = ['Apple', 'Pear', 'Orange'];


const CheckBoxControl = () => {
    
    return (
        <div>
            <Checkbox.Group options={plainOptions} defaultValue={['Apple']} onChange={() => {}} />
        </div>
    )
}

export default CheckBoxControl
