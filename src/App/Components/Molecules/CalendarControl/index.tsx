import { DatePicker } from "antd";
import { GeneralControlProps } from "../../../../types/interfaces";

const CalendarControl = ({ hookForm, rest }: GeneralControlProps) => {
  return (
    <div>
      <DatePicker
        onChange={(e) => {
          rest.onChange && rest.onChange(e);
          hookForm.field.onChange(e);
        }}
        defaultValue={rest.defaultValue}
      />
    </div>
  );
};

export default CalendarControl;
