import { Button, Card } from "antd";
import FormControl from "App/Components/Molecules/FormControl";
import { TestData } from "data/test";
import { Grid, Column, Row } from "mylibs/Util-Styled-Components/src";
import { useForm } from "react-hook-form";

const Formulario = () => {
    const { register, handleSubmit, setValue } = useForm();
    const onSubmit = (data: any) => { console.log(data) };

    return (
        <Card title="Formulario">
            <form>
                <Column gap="10px">
                    <Grid childWidth="30rem" gap="20px">
                        { TestData.map((el: any) => <FormControl name={el.name}/>)}
                    </Grid>
                    <Row style={{alignSelf:"flex-end"}} gap="10px">
                        <Button type="link">
                            Cancelar
                        </Button>
                        <Button type="primary">
                            Guardar
                        </Button>
                    </Row>
                </Column>
            </form>
        </Card>
    )
}

export default Formulario
