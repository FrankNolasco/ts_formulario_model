import TextArea from "antd/lib/input/TextArea";
import { GeneralControlProps } from "../../../../types/interfaces";

const InputDesControl = ({ hookForm, rest }: GeneralControlProps) => {
    return (
        <TextArea
        autoSize
        onChange={hookForm.field.onChange}
        defaultValue={rest.defaultValue}
        />
    );
};

export default InputDesControl;
