import { Image } from 'antd'
import { GeneralControlProps } from 'types/interfaces'

const ImagenControl = ({hookForm}:GeneralControlProps) => {
    return (
        <div>
            <Image/>
            <input type="file" accept="image/*" onChange={hookForm.field.onChange}/>
        </div>
    )
}

export default ImagenControl
