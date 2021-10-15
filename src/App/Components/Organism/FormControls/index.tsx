import { Button } from "antd";
import FormControl from "App/Components/Molecules/FormControl";
import { Column, Row, Grid } from "mylibs/Util-Styled-Components/src";
import { FormProvider, useForm } from "react-hook-form";
import { IInputPayload } from "types/interfaces";

const FormControls = ({ children, ...restProps }: any) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(restProps.onSubmit)}>
        <Column gap="10px">
          {children}
          {restProps.inputs && <Controls inputs={restProps.inputs} />}
          <Row style={{ alignSelf: "flex-end" }} gap="10px">
            <Button type="link">{restProps.cancelLabel || "Cancelar"}</Button>
            <Button type="primary" htmlType="submit">
              {restProps.submitLabel || "Guardar"}
            </Button>
          </Row>
        </Column>
      </form>
    </FormProvider>
  );
};

FormControls.Extra = ({ children }: any) => <div>{children}</div>;

const Controls = ({ inputs }: any) => (
  <Grid childWidth="30rem" gap="30px">
    {inputs.map((el: IInputPayload, key: number) => (
      <FormControl key={key} {...el} orientation={"column"} />
    ))}
  </Grid>
);

FormControls.Controls = Controls;

export default FormControls;
