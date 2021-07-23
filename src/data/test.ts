export const TestData = [
    {
      name: "fechaIngreso",
      type: "calendar",
      required: true,
      customProps: {
        yearNavigator: true,
        monthNavigator: true,
        yearRange: "2000:2050",
        minDate: new Date(`01/01/${new Date().getFullYear()}`),
        maxDate: new Date(),
      },
    },
    {
      name: "dieta_paciente",
      type: "dropdown-prime",
      optionsDropdown: [
        { dieta: "DIETA 1", iddieta: 1 },
        { dieta: "DIETA 2", iddieta: 2 },
        { dieta: "DIETA 3", iddieta: 3 }
      ],
      optionLabel: "dieta",
      required: true,
    },
    { name: "observacion", type: "input-description" },
  ]