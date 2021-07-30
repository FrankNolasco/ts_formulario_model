import { Input } from "antd"
import { GeneralControlProps } from "types/interfaces"

const SearchControl = ({hookForm}:GeneralControlProps) => {
    return (
        <div>
            <Input.Search onChange={hookForm.field.onChange}/>
        </div>
    )
}

export default SearchControl
