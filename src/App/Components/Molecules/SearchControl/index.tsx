import { Input } from "antd";
import { GeneralControlProps } from "../../../../types/interfaces";

const SearchControl = ({ hookForm, rest }: GeneralControlProps) => {
  return (
    <Input.Search
      onChange={hookForm.field.onChange}
      defaultValue={rest.defaultValue}
    />
  );
};

export default SearchControl;