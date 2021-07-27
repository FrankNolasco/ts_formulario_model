import { Radio } from "antd"

const RadioControl = () => {
    return (
        <Radio.Group>
            <Radio value={1}>
                SI
            </Radio>
            <Radio value={2}>
                NO
            </Radio>            
        </Radio.Group>
    )
}

export default RadioControl
