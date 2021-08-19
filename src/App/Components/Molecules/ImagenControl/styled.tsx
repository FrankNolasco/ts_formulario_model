import styled from "styled-components";
import { Row } from "mylibs/Util-Styled-Components/src";

export const ImagenControlStyled = styled(Row)`
    .ant-image-img {
        width: 60px;
        height: 30px;
        object-fit: contain;
    }
    .ant-image-mask {
        font-size: 11px;
    }
`

export const InputButton = styled.div`
    input {
        display:none;
    }
    label {
        background-color: #1890ff;
        color: white;
        padding: 2px 8px;
        border-radius: 2px;
    }
`