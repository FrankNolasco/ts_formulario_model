import { IReducerNotifyStore } from "types/interfaces";

export const TOAST_FORMULARIO_NO_VALIDO : IReducerNotifyStore = {
    severity: "warn",
    summary: "Formulario no valido",
    detail: "Por favor, llena todos los campos requeridos",
}