import { Input, Switch } from "antd"
import { Row } from "mylibs/Util-Styled-Components/src"
import { GeneralControlProps } from "types/interfaces"

const SwitchInputControl = ({hookForm,rest}:GeneralControlProps) => {
    return (
        <Row gap="10px">
            <Switch 
                onChange={ (value) => hookForm.field.onChange({...hookForm.field.value, switch: value })}
                defaultChecked={ rest.defaultValue ? rest.defaultValue.switch : undefined }
            /> 
            <Input 
                onChange={ (e) => hookForm.field.onChange({...hookForm.field.value, input: e.target.value })}
                defaultValue={ rest.defaultValue ? rest.defaultValue.input : undefined }
            />
        </Row>
    )
}

export default SwitchInputControl
