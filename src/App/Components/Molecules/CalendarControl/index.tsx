import { DatePicker } from "antd"
import { GeneralControlProps } from "types/interfaces"

const CalendarControl = ({hookForm}:GeneralControlProps) => {
    return (
        <div>
            <DatePicker onChange={hookForm.field.onChange}/>
        </div>
    )
}

export default CalendarControl
