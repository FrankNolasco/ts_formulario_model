import { Image } from "antd";
import { GeneralControlProps } from "types/interfaces";

const ImagenControl = ({ hookForm, rest }: GeneralControlProps) => {
  return (
    <div>
      <Image />
      <input
        type="file"
        accept="image/*"
        onChange={hookForm.field.onChange}
        defaultValue={rest.defaultValue}
      />
    </div>
  );
};

export default ImagenControl;
