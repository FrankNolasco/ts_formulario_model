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