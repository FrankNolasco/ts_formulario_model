import { ControlType } from "types/interfaces"
import { element } from "./map"

interface Props {
    type: ControlType,
    rest : any
}

export const Control = ({type, rest}: Props) => {
    return element(rest)[type]
}