import { Input } from "antd"
import { FormControlStyled } from "./styled"


interface Props {
    orientation?: "row" | "column" | undefined;
    name: string;
}

const FormControl = ({orientation, name} : Props) => {
    return (
        <FormControlStyled orientation={orientation}>
            <span className="label-input">{name}</span>
            <div className="content-input">
                <Input/>
            </div>
        </FormControlStyled>
    )
}

export default FormControl
