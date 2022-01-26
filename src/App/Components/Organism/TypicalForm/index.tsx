import { IInputPayload } from "../../../../types/interfaces";
import Formulario from "../Formulario"
const { Title, FormControls } = Formulario;

interface Props {
    title: string, 
    inputs: IInputPayload[],
    onSubmit: (data: any) => void
}

const TypicalForm = ({title, inputs, onSubmit}: Props) => {
    return (
        <Formulario width="100%">
            <Title>{title}</Title>
            <FormControls inputs={inputs} onSubmit={onSubmit}/>
        </Formulario>
    )
}

export default TypicalForm
