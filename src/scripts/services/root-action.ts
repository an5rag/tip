export interface IAction {
  type: string;
  payload?: any;
}

export type IRootThunkAction = (dispatch: (...args : any[]) => any) => any;

export type IActionCreator = { [actionName: string]: (...args: any[]) => IAction | IRootThunkAction };