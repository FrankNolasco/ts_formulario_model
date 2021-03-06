import { DatePicker } from "antd";
import { Row } from "mylibs/Util-Styled-Components/src";
import Select from "react-dropdown-select";
import styled, {keyframes} from "styled-components";
interface IFormControlProps {
  orientation?: "row" | "column" | undefined;
  fullWidth?: boolean;
  disabled?: boolean;
}

export const Bounds = keyframes`
 from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

export const FormControlStyled = styled(Row)<IFormControlProps>`
  display: ${props => props.disabled ? "none" : "flex"} ;
  position: relative;
  flex-direction: ${(props) => props.orientation === "column" ? "column" : "row"};
  gap: 10px;
  grid-column: ${props => props.fullWidth ? '1/3' : "auto"};
  .label-input {
    width: ${(props) => (props.orientation === "column" ? "100%" : "30%")};
    text-transform: capitalize;
    strong {
        color: red;
    }
  }
  .content-input {
    width: ${(props) => (props.orientation === "column" ? "100%" : "70%")};
  }
  .error-message {
    position: absolute;
    top: 0;
    right: 0;
  }
`;

export const DatePickerStyled = styled(DatePicker)`
  width: 100%;
`

export const DropdownStyled = styled(Select)`
  :hover, :focus-within {
    border-color: #40a9ff !important;
  }
`