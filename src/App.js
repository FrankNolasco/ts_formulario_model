import "antd/dist/antd.css";
import { TestData } from "data/test";
import Formulario from "App/Components/Organism/Formulario";
const { Title, FormDescription, FormControls } = Formulario;
const App = () => {
  return (
    <Formulario width="80%">
      <Title>DAR ALTA PACIENTE</Title>
      <FormDescription>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt excepturi
        modi atque perspiciatis, maiores porro omnis ut ullam, in consequatur
        provident, dolorum cum perferendis magni. Molestias velit modi ipsa
        laboriosam.
      </FormDescription>
      <FormControls inputs={TestData} onSubmit={(data) => console.log(data)}/>
    </Formulario>
  );
};
export default App;
