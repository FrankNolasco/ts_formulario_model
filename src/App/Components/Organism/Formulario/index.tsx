import { FormProvider, useForm } from "react-hook-form";
import {
  Div,
  Heading,
  Typography,
} from "mylibs/Util-Styled-Components/src";
import FormControls from "../FormControls";

export default function Formulario({children,...restProps}: any) {
  const methods = useForm();
  return (
    <Div width={restProps.width || "100%"} margin="auto" padding="1.5rem">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(restProps.onSubmit)}>
          {children}
        </form>
      </FormProvider>
    </Div>
  );
}

Formulario.Title = ({ children, centered }: any) => (
  <Heading variant="h2" style={{textAlign: centered? "center": "start"}}>{children}</Heading>
);

Formulario.FormDescription = ({ children }: any) => (
  <Typography variant="p">{children}</Typography>
);


Formulario.FormControls = FormControls
