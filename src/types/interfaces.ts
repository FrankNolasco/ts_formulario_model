export interface IReducerNotifyStore {
    severity: "info" | "success" | "error" | "warn";
    summary: JSX.Element | string;
    detail: JSX.Element | string;
    sticky? : boolean;
    closable? : boolean;
  }