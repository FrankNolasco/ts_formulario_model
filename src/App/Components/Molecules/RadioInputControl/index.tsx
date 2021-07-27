import { Input, Radio } from "antd"
import { Row } from "mylibs/Util-Styled-Components/src"

const RadioInputControl = () => {
    return (
        <Row>
            <Radio.Group>
                <Radio value={1}>
                    SI
                </Radio>
                <Radio value={2}>
                    NO
                </Radio>
            </Radio.Group>
            <Input/>
        </Row>
    )
}

export default RadioInputControl
