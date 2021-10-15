import { IInputPayload } from "types/interfaces";
const required = true
export const TestData : IInputPayload[] = [
    // {
    //   name: "SEARCH",
    //   type: "search",
    //   fullWidth: true,
    //   defaultValue:"HOLA MUNDO YO SOY EL VALOR POR DEFECTO"
    // },
    {
      name: "INPUT",
      type: "input",
      defaultValue:"HOLA MUNDO YO SOY EL VALOR POR DEFECTO",
      required
    },
    {
      name: "IMAGEN",
      type: "imagen",
      required
    },
    
    {
      name: "SWITCH",
      type: "switch"
    },
    {
      name: "CALENDAR",
      type: "calendar"
    },
    {
      name: "DROPDOWN",
      type: "dropdown",
      optionsDropdown: [{name:"Hola",edad:"10"},{name:"Holaw",edad:"10"},{name:"dasdaHola",edad:"10"},{name:"Hasdasdasola",edad:"10"}],
      optionValue:"name",
      optionLabel: "name",
      defaultValue: [{name:"Hola",edad:"10"}]
    },
    {
      name: "CHECKBOX",
      type: "checkbox",
      optionsDropdown: ["Apple", "Pear", "Orange"],
    },
    {
      name: "RADIO BUTTON",
      type: "radio-button",
      optionsDropdown: [{name:"Apple"},{name:"Pear"},{name:"GAAAAAAAAAAAA!"}],
      optionLabel: "name",
      optionValue: "name",
      defaultValue: "Hola"
    },
    {
      name: "INPUT DESCRIPTION",
      type: "input-description"
    },
    {
      name: "RADIO BUTTON WITH INPUT",
      type: "radio-button-input",
      optionsDropdown: [{name:"Hola",edad:"10"},{name:"Holaw",edad:"10"},{name:"dasdaHola",edad:"10"}],
      optionLabel: "name",
      optionValue:"name",
      defaultValue:{radio:"Hola"}
    },
    {
      name: "CHECKBOX BUTTON WITH INPUT",
      optionsDropdown: ["Apple", "Pear", "Orange"],
      type: "checkbox-button-input"
    },
    {
      name: "SWITCH BUTTON WITH INPUT",
      type: "switch-button-input"
    },
  ]