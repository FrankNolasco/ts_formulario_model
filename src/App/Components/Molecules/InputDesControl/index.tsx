import TextArea from "antd/lib/input/TextArea"
import { GeneralControlProps } from "types/interfaces"

const InputDesControl = ({hookForm}:GeneralControlProps) => {
    return (
        <div>
            <TextArea autoSize onChange={hookForm.field.onChange}/>
        </div>
    )
}

export default InputDesControl
