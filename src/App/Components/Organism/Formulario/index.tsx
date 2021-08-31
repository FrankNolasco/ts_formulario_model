import { Button } from "antd";
import { useForm, FormProvider } from "react-hook-form";
import { IInputPayload, FormProps } from "../../../../types/interfaces";
import FormControl from "../../Molecules/FormControl";
import {
  Grid,
  Column,
  Row,
  Div,
  Heading,
  Typography,
} from "mylibs/Util-Styled-Components/src";

const Formulario = ({
  descriptions,
  extra,
  inputs,
  title,
  formDescription,
  onSubmit,
  onCancel,
  submitLabel = "Guardar",
  cancelLabel = "Cancelar",
  width = "100%"
}: FormProps) => {
  const methods = useForm();
  return (
    <Div width={ width } margin="auto" padding="1.5rem">
      <Div margin="0 0 15px 0">
        <Heading variant="h2">{title}</Heading>
        <Typography variant="p">{formDescription}</Typography>
      </Div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Column gap="10px">
            {descriptions && descriptions}
            <Grid childWidth="30rem" gap="30px">
              {inputs.map((el: IInputPayload, key: number) => (
                <FormControl
                  key={key}
                  {...el}
                  orientation={"column"}
                />
              ))}
            </Grid>
            {extra && extra}
            <Row style={{ alignSelf: "flex-end" }} gap="10px">
              <Button type="link">{cancelLabel}</Button>
              <Button type="primary" htmlType="submit">{submitLabel}</Button>
            </Row>
          </Column>
        </form>
      </FormProvider>
    </Div>
  );
};

export default Formulario;
