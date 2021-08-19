import "antd/dist/antd.css";
import { TestData } from "data/test";
import Formulario from "App/Components/Organism/Formulario";
const App = () => {
  return (
    <Formulario
      title="DAR ALTA PACIENTE"
      formDescription="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt excepturi modi atque perspiciatis, maiores porro omnis ut ullam, in consequatur provident, dolorum cum perferendis magni. Molestias velit modi ipsa laboriosam."
      inputs={TestData}
      onSubmit={(data) => {console.log(data)}}
      width="80%"
    />
  );
};
export default App;