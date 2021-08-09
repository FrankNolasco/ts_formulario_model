import { Image } from "antd";
import { useEffect, useState } from "react";
import { GeneralControlProps } from "types/interfaces";
import { ImagenControlStyled } from "./styled";

const ImagenControl = ({ hookForm, rest }: GeneralControlProps) => {
  const [file, setFile] = useState<any>()
  useEffect(() => {console.log(file)},[file])
  return (
    <ImagenControlStyled>
      {hookForm.field.value && hookForm.field.value.length > 0 && <Image src={URL.createObjectURL(hookForm.field.value[0])} />}
      <input
        type="file"
        accept="image/*"
        onChange={(e) => hookForm.field.onChange(e.target.files)}
        defaultValue={rest.defaultValue}
      />
    </ImagenControlStyled>
  );
};

export default ImagenControl;
