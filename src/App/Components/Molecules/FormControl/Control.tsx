import { ControlType, IInputPayload } from "../../../../types/interfaces";
import { element } from "./map";

interface Props {
  type: ControlType;
  rest: IInputPayload;
  hookForm: any;
}

export const Control = ({ type, rest, hookForm }: Props) => {
  return element(rest, hookForm)[type];
};
