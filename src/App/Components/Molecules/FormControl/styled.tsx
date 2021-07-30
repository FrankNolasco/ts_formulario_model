import { Row } from "mylibs/Util-Styled-Components/src";
import styled from "styled-components";

interface IFormControlProps {
  orientation?: "row" | "column" | undefined;
  fullWidth?: boolean;
}

export const FormControlStyled = styled(Row)<IFormControlProps>`
  display: flex;
  flex-direction: ${(props) =>
    props.orientation === "column" ? "column" : "row"};
    gap: 10px;

  grid-column: ${props => props.fullWidth ? '1/3' : "auto"};
  .label-input {
    width: ${(props) => (props.orientation === "column" ? "100%" : "30%")};
    /* text-align: ${(props) => props.orientation === "column" ? "start" : "end"}; */
    text-transform: capitalize;
    strong {
        color: red;
    }
  }
  .content-input {
    width: ${(props) => (props.orientation === "column" ? "100%" : "70%")};
  }
`;
