import { Input, Switch } from "antd"
import { Row } from "mylibs/Util-Styled-Components/src"
import { GeneralControlProps } from "types/interfaces"

const SwitchInputControl = ({hookForm,rest}:GeneralControlProps) => {
    return (
        <Row gap="10px">
            <Switch onChange={hookForm.field.onChange}/> 
            <Input/>
        </Row>
    )
}

export default SwitchInputControl
