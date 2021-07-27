import { Button, Card, Descriptions } from "antd";
import FormControl from "App/Components/Molecules/FormControl";
import { TestData } from "data/test";
import { Grid, Column, Row, Div } from "mylibs/Util-Styled-Components/src";
import { useForm } from "react-hook-form";
import { IInputPayload } from "types/interfaces";

const Formulario = () => {
  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Div width="80%" margin="auto" padding="1.5rem">
        <div>
            <h2>DAR ALTA PACIENTE</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt excepturi modi atque perspiciatis, maiores porro omnis ut ullam, 
                in consequatur provident, dolorum cum perferendis magni. Molestias velit modi ipsa laboriosam.</p>
        </div>
      <form>
        <Column gap="10px">
            <Descriptions bordered>
            <Descriptions.Item label="I am label">This is a description</Descriptions.Item>
            <Descriptions.Item label="I am label">This is a description</Descriptions.Item>
            <Descriptions.Item label="I am label">This is a description</Descriptions.Item>
            <Descriptions.Item label="I am label">This is a description</Descriptions.Item>
            <Descriptions.Item label="I am label">This is a description</Descriptions.Item>
          </Descriptions>
          <Grid childWidth="30rem" gap="20px">
            {TestData.map((el: IInputPayload) => (
              <FormControl {...el} orientation="column"/>
            ))}
          </Grid>
          <Descriptions bordered>
            <Descriptions.Item label="I am label">This is a description</Descriptions.Item>
            <Descriptions.Item label="I am label">This is a description</Descriptions.Item>
            <Descriptions.Item label="I am label">This is a description</Descriptions.Item>
            <Descriptions.Item label="I am label">This is a description</Descriptions.Item>
            <Descriptions.Item label="I am label">This is a description</Descriptions.Item>
          </Descriptions>
          <Row style={{ alignSelf: "flex-end" }} gap="10px">
            <Button type="link">Cancelar</Button>
            <Button type="primary">Guardar</Button>
          </Row>
        </Column>
      </form>
    </Div>
  );
};

export default Formulario;
