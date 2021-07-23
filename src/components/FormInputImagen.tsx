import React, { useEffect, useState } from "react";

interface Props {
  name: string;
}

const FormImagenInput = ({ name }: Props) => {
  const [imagenPreloaded, setImagenPreloaded] = useState<any>(null);
  return (
    <div className="w-100">
      <label htmlFor={name}>
        {imagenPreloaded ? imagenPreloaded.name : "Cargar una imagen"}
      </label>
      <input
        type="file"
        id={name}
        accept="image/x-png,image/gif,image/jpeg"
        onChange={(e: any) => {
          setImagenPreloaded(e.target.files[0]);
        }}
      />
    </div>
  );
};

export default FormImagenInput;
