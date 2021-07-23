import styled from "styled-components";

export const FormFieldStyled = styled.div<{}>`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

`

export const LabelName = styled.label`
    display: flex;
    align-items: center;
    gap: 3px;
    text-transform: capitalize;
    width: 40%;
    font-weight: 500;
`

export const Required = styled.span<{isRequired : boolean}>`
    display: ${props => props.isRequired ? "inline": "none"};
    color: ${props => props.theme.danger};
`

export const FormControlStyled = styled.div`
    width: 60%;
`