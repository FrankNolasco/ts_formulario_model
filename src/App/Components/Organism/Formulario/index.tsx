import {
  Div,
  Heading,
  Typography,
} from "mylibs/Util-Styled-Components/src";
import FormControls from "../FormControls";

export default function Formulario({children,...restProps}: any) {
  return (
    <Div width={restProps.width || "100%"} margin="auto" padding="1.5rem">
      {children}
    </Div>
  );
}

Formulario.Title = ({ children }: any) => (
  <Heading variant="h2">{children}</Heading>
);

Formulario.FormDescription = ({ children }: any) => (
  <Typography variant="p">{children}</Typography>
);


Formulario.FormControls = FormControls
