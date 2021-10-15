// import { DatePicker } from "antd";
import { GeneralControlProps } from "../../../../types/interfaces";
import { DatePickerStyled } from "../FormControl/styled";

const CalendarControl = ({ hookForm, rest }: GeneralControlProps) => {
  return (
    <div>
      <DatePickerStyled
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
