import { Checkbox, Input } from "antd";
import { Row } from "mylibs/Util-Styled-Components/src";
import { GeneralControlProps } from "types/interfaces";

const plainOptions = ['Apple', 'Pear', 'Orange'];
const CheckBoxInputControl = ({hookForm}:GeneralControlProps) => {
    return (
        <Row gap="10px">
            <Checkbox.Group options={plainOptions} defaultValue={['Apple']} onChange={hookForm.field.onChange} />
            <Input/>
        </Row>
    )
}

export default CheckBoxInputControl
