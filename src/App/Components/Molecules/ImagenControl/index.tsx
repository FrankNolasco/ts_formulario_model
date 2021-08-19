import { Image } from "antd";
import { GeneralControlProps } from "../../../../types/interfaces";
import { ImagenControlStyled, InputButton } from "./styled";

const ImagenControl = ({ hookForm, rest }: GeneralControlProps) => {
  return (
    <ImagenControlStyled>
      {hookForm.field.value && hookForm.field.value.length > 0 && <Image src={URL.createObjectURL(hookForm.field.value[0])} />}
      <InputButton>
        <input
          type="file"
          id={rest.name}
          accept="image/*"
          onChange={(e) => hookForm.field.onChange(e.target.files)}
          defaultValue={rest.defaultValue}
        />
        <label htmlFor={rest.name}>
          SELECCIONAR
        </label>
      </InputButton>
    </ImagenControlStyled>
  );
};

export default ImagenControl;
