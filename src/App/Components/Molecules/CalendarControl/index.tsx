import { DatePicker } from "antd";
import { GeneralControlProps } from "types/interfaces";

const CalendarControl = ({ hookForm, rest }: GeneralControlProps) => {
  return (
    <div>
      <DatePicker onChange={hookForm.field.onChange} defaultValue={rest.defaultValue}/>
    </div>
  );
};

export default CalendarControl;
