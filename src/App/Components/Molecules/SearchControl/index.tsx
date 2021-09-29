import { Input } from "antd";
import { GeneralControlProps } from "../../../../types/interfaces";

const SearchControl = ({ hookForm, rest }: GeneralControlProps) => {
  return (
    <Input.Search
      onChange={(e) => {
        rest.onChange && rest.onChange(e);
        hookForm.field.onChange(e);
      }}
      defaultValue={rest.defaultValue}
    />
  );
};

export default SearchControl;
