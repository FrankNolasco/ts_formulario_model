import { Image } from 'antd'

const ImagenControl = () => {
    return (
        <div>
            <Image/>
            <input type="file" accept="image/*"/>
        </div>
    )
}

export default ImagenControl
